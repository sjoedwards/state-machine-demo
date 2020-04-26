import { Machine, assign, spawn } from 'xstate';
import axios from 'axios';
import { Race } from '../interfaces'
import raceMachine from './raceMachine'

const wait = (amount = 0) => new Promise(resolve => setTimeout(resolve, amount));

const getData = async (_: any, event: any) => {
  await wait(1000);
  const racesResponse = await axios.get('http://localhost:3001/races')
  return racesResponse.data
}

const calculateRaceAbility = async (context: LaceupContext, event: any): Promise<String> => {
  const {kmPerWeek,runsPerWeek, previousRuns} = context
  const determineNormalisedScore = (score: number, maxValue: number) => {
    if (score >= maxValue) {
      return 1
    } else {
      return score / maxValue
    }
  }
  const kmPerWeekNormalised = determineNormalisedScore(kmPerWeek, 100)
  const runsPerWeekNormalised = determineNormalisedScore(runsPerWeek, 7)
  // Assume for now if they haven't dont 3 runs they score 0
  const previousRunsNormalised = (() => {
      const aggScorePrevRaces =  Object.values(previousRuns).map(({distance, time, date}) => {
        if (time == 0) {
          return 0
        }
        const speedNormalised = determineNormalisedScore((distance/time), 0.25)
        const ageNormalised = (() => {
          const runAge = 2020 - date
            if (runAge <= 0) {
              return 1
            } else if (runAge > 10) {
              return 0
            } else {
              return 1 - (runAge / 10)
            }
        })()
        return ((0.7 * speedNormalised) + (0.3 * ageNormalised))
      }).reduce((total, acc) => total + acc, 0)
      return aggScorePrevRaces / Object.values(previousRuns).length
  })()
  const aggScoreTotal = (kmPerWeekNormalised + runsPerWeekNormalised + previousRunsNormalised) / 3
  await wait(2000)

  switch (true) {
    case (aggScoreTotal <= 0.2 ):
      return 'beginner'
    case (aggScoreTotal <= 0.4 ):
      return 'novice'
    case (aggScoreTotal <= 0.6 ):
      return 'experienced'
    case (aggScoreTotal <= 0.8 ):
      return 'advanced'
    case (aggScoreTotal <= 1 ):
      return 'expert'
    default:
      return 'beginner'
  }
}

const hasPreviousRaces = (context: LaceupContext, _: any): boolean => context.numPreviousRaces >= 3

interface PreviousRun {
  date: number,
  time: number,
  distance: number
}

interface LaceupContext {
  races: Array<Race>,
  racesToDisplay: Array<Race>,
  ability: String,
  selectedRace?: Race,
  modalOpen: boolean,
  numPreviousRaces: number,
  kmPerWeek: number,
  runsPerWeek: number,
  previousRuns: {
    previousRunOne: PreviousRun,
    previousRunTwo: PreviousRun
    previousRunThree: PreviousRun
  }
}

const defaultContext = {
  races: [], racesToDisplay: [], ability: '', modalOpen: false, numPreviousRaces: 0, kmPerWeek: 0, runsPerWeek: 0, previousRuns: {
    previousRunOne: {
      distance: 0,
      time: 0,
      date: 2020
    },
    previousRunTwo: {
      distance: 0,
      time: 0,
      date: 2020
    },
    previousRunThree: {
      distance: 0,
      time: 0,
      date: 2020
    }
  }
}

const filterRacesByAbility = (ctx: any, event: any): Array<Race> => ctx.races.filter((race: Race) => race.ability === ctx.ability);

const simpleMachine = Machine<LaceupContext, any, any>({
  id: 'laceupMachine',
  initial: 'infoOne',
  context: defaultContext,
  on: {
    RETRY_WIZARD: {
      target: 'loadingWizard',
      actions: assign ({
        previousRuns: (ctx,_) => defaultContext.previousRuns
      })
    },
  },
  states: {
    infoOne: {
      on: {
        INFO_SUBMIT_1: {
          target: 'infoTwo',
        },
      },
    },
    infoTwo: {
      on: {
        INFO_SUBMIT_2: {
          target: 'infoThree',
        },
      },
    },
    infoThree: {
      on: {
        INFO_SUBMIT_3: {
          target: 'loadingWizard',
        },
      },
    },
    loadingWizard: {
      invoke: {
        id: 'getData',
        src: getData,
        onDone: {
          target: 'trainingInfo',
          actions: assign({
            races: (_, event) => event.data
          })
        },
        onError: 'errorGettingData'
      }
    },
    errorGettingData: {},
    trainingInfo: {
      id: 'trainingInfo',
      initial: 'races',
      states: {
        races: {
          on: {
            NUM_RACES_SUBMIT: 'kmPerWeek',
            PREVIOUS_RACE_INFO_INPUT: {
              actions: assign({
                numPreviousRaces: (_, event) => event.input
              })
            }
          },
        },
        kmPerWeek: {
          on: {
            KM_PER_WEEK_SUBMIT: 'runsPerWeek',
            KM_PER_WEEK_INPUT: {
              actions: assign({
                kmPerWeek: (_, event) => event.input
              })
            }
          },
        },
        runsPerWeek: {
          on: {
            RUNS_PER_WEEK_SUBMIT: 'trainingInfoComplete',
            RUNS_PER_WEEK_INPUT: {
              actions: assign({
                runsPerWeek: (_, event) => event.input
              })
            }
          },
        },
        trainingInfoComplete: {
          type: 'final',
        },
      },
      onDone: [
        {
          target: 'previousRaceInfo',
          cond: 'hasPreviousRaces'
        },
        {
          target: 'calculatingRaceAbility',
        },
      ]
    },
    previousRaceInfo: {
      id: 'parallelMachine',
      initial: 'start',
      states: {
        start: {
          type: 'parallel',
          states: {
            prevRaceOne: {
              id: 'Prev Race 1',
              initial: 'yearRace1',
              states: {
                yearRace1: {
                  on: {
                    COMPLETE_YEAR_RACE_1: 'distanceRace1',
                    INPUT_YEAR_RACE_1: {
                      actions: assign({
                        previousRuns: (ctx:any, event) => ({
                          ...ctx.previousRuns,
                          previousRunOne: {
                            ...ctx.previousRuns.previousRunOne,
                            date: event.input
                          }
                        })
                      })
                    }
                  }
                },
                distanceRace1: {
                  on: {
                    COMPLETE_DISTANCE_RACE_1: 'timeRace1',
                    INPUT_DISTANCE_RACE_1: {
                      actions: assign({
                        previousRuns: (ctx:any, event) => ({
                          ...ctx.previousRuns,
                          previousRunOne: {
                            ...ctx.previousRuns.previousRunOne,
                            distance: event.input
                          }
                        })
                      })
                    }
                  }
                },
                timeRace1: {
                  on: {
                    COMPLETE_TIME_RACE_1: 'infoSubmitRace1',
                    INPUT_TIME_RACE_1: {
                      actions: assign({
                        previousRuns: (ctx:any, event) => ({
                          ...ctx.previousRuns,
                          previousRunOne: {
                            ...ctx.previousRuns.previousRunOne,
                            time: event.input
                          }
                        })
                      })
                    }
                  }
                },
                infoSubmitRace1: {
                  type: 'final'
                }
              },
            },
            prevRaceTwo: {
              id: 'Prev Race 2',
              initial: 'yearRace2',
              states: {
                yearRace2: {
                  on: {
                    COMPLETE_YEAR_RACE_2: 'distanceRace2',
                    INPUT_YEAR_RACE_2: {
                      actions: assign({
                        previousRuns: (ctx:any, event) => ({
                          ...ctx.previousRuns,
                          previousRunTwo: {
                            ...ctx.previousRuns.previousRunTwo,
                            date: event.input
                          }
                        })
                      })
                    }
                  }
                },
                distanceRace2: {
                  on: {
                    COMPLETE_DISTANCE_RACE_2: 'timeRace2',
                    INPUT_DISTANCE_RACE_2: {
                      actions: assign({
                        previousRuns: (ctx:any, event) => ({
                          ...ctx.previousRuns,
                          previousRunTwo: {
                            ...ctx.previousRuns.previousRunTwo,
                            distance: event.input
                          }
                        })
                      })
                    }
                  }
                },
                timeRace2: {
                  on: {
                    COMPLETE_TIME_RACE_2: 'infoSubmitRace2',
                    INPUT_TIME_RACE_2: {
                      actions: assign({
                        previousRuns: (ctx:any, event) => ({
                          ...ctx.previousRuns,
                          previousRunTwo: {
                            ...ctx.previousRuns.previousRunTwo,
                            time: event.input
                          }
                        })
                      })
                    }
                  }
                },
                infoSubmitRace2: {
                  type: 'final'
                }
              },
            },
            prevRaceThree: {
              id: 'Prev Race 3',
              initial: 'yearRace3',
              states: {
                yearRace3: {
                  on: {
                    COMPLETE_YEAR_RACE_3: 'distanceRace3',
                    INPUT_YEAR_RACE_3: {
                      actions: assign({
                        previousRuns: (ctx:any, event) => ({
                          ...ctx.previousRuns,
                          previousRunThree: {
                            ...ctx.previousRuns.previousRunThree,
                            date: event.input
                          }
                        })
                      })
                    }
                  }
                },
                distanceRace3: {
                  on: {
                    COMPLETE_DISTANCE_RACE_3: 'timeRace3',
                    INPUT_DISTANCE_RACE_3: {
                      actions: assign({
                        previousRuns: (ctx:any, event) => ({
                          ...ctx.previousRuns,
                          previousRunThree: {
                            ...ctx.previousRuns.previousRunThree,
                            distance: event.input
                          }
                        })
                      })
                    }
                  }
                },
                timeRace3: {
                  on: {
                    COMPLETE_TIME_RACE_3: 'infoSubmitRace3',
                    INPUT_TIME_RACE_3: {
                      actions: assign({
                        previousRuns: (ctx:any, event) => ({
                          ...ctx.previousRuns,
                          previousRunThree: {
                            ...ctx.previousRuns.previousRunThree,
                            time: event.input
                          }
                        })
                      })
                    }
                  }
                },
                infoSubmitRace3: {
                  type: 'final'
                }
              },
            },
          },
          onDone: {
            target: 'end',
          }
        },
        end: { type: 'final' }
      },
      onDone: 'calculatingRaceAbility'
    },
    calculatingRaceAbility: {
      invoke: {
        id: 'calculateRaceAbility',
        src: calculateRaceAbility,
        onDone: {
          target: 'raceAbility',
          actions: assign({
            ability: (_, event) => event.data
          })
        },
        onError: 'errorCalculatingRaceAbility'
      }
    },
    errorCalculatingRaceAbility: {
      on: {
        RETRY_CALCULATE_RACE_ABILITY: 'calculatingRaceAbility'
      }
    },
    raceAbility: {
      on: {
        DISPLAY_RACES_FOR_ABILITY: {
          target: 'races',
          actions: assign({ racesToDisplay: (ctx, event) => filterRacesByAbility(ctx, event) })
        },
        DISPLAY_ALL_RACES: {
          target: 'races',
          actions: assign({ racesToDisplay: (ctx, _) => ctx.races })
        }
      },
    },
    races: {
      entry: assign({
        racesToDisplay: (context, _) => {
          return context.racesToDisplay.map((race: Race) => ({
            ...race,
            ref: spawn(raceMachine.withContext(race))
          }));
        }
      }),
      on: {
        BACK_TO_RESULTS: 'raceAbility',
        SELECTED: {
          actions: assign({
            selectedRace: (ctx, event) => event.race,
            modalOpen: (ctx, event) => !ctx.modalOpen
          })
        },
        'CLOSE_MODAL': {
          actions: assign({
            modalOpen: (ctx) => false
          })
        }
      }
    },
  }
}, {
  guards: {
    hasPreviousRaces,
  }
});

export default simpleMachine;

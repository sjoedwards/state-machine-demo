import { Machine, assign } from 'xstate';
import axios from 'axios';

const wait = (amount = 0) => new Promise(resolve => setTimeout(resolve, amount));

const getData = async (_: any, event: any) => {
  try {
    await wait(1000);
    return axios.get('http://localhost:3001/races')
  } catch (e) {
    console.log(e)
  }
}

const calculateRaceAbility = async (_: any, event: any): Promise<String> => {
  // In a real application, this might be something like an AJAX call
  await wait(2000)
  if (event.payload === true) {
    throw new Error('error')
  }
  return 'test'
}

const hasRaceInfo = (_: any, event: any): boolean => {
  return event.canSkipTwo
}

interface Race {
  ability: String
}

interface LaceupContext {
  races: Array<Race>,
  data: String,
  ability: String,
  raceFocused?: Race
}

const filterRacesByAbility = (ctx:any, event:any): Array<Race> => ctx.races.filter((race: Race) => race.ability === ctx.raceAbility);

const simpleMachine = Machine<LaceupContext, any, any>({
  id: 'laceupMachine',
  initial: 'infoOne',
  context: {races:[], data: '', ability: ''},
  on: {
    RETRY_WIZARD: {
      target: 'loadingWizard',
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
            data: (_, event) => event.data
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
          },
        },
        kmPerWeek: {
          on: {
            KM_PER_WEEK_SUBMIT: 'runsPerWeek',
          },
        },
        runsPerWeek: {
          on: {
            RUNS_PER_WEEK_SUBMIT: 'trainingInfoComplete',
          },
        },
        trainingInfoComplete: {
          type: 'final',
        },
      },
      onDone: [
        {
          target: 'previousRaceInfo',
          cond: 'hasRaceInfo'
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
                    COMPLETE_YEAR_RACE_1: 'distanceRace1'
                  }
                },
                distanceRace1: {
                  on: {
                    COMPLETE_DISTANCE_RACE_1: 'timeRace1'
                  }
                },
                timeRace1: {
                  on: {
                    COMPLETE_TIME_RACE_1: 'infoSubmitRace1'
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
                    COMPLETE_YEAR_RACE_2: 'distanceRace2'
                  }
                },
                distanceRace2: {
                  on: {
                    COMPLETE_DISTANCE_RACE_2: 'timeRace2'
                  }
                },
                timeRace2: {
                  on: {
                    COMPLETE_TIME_RACE_2: 'infoSubmitRace2'
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
                    COMPLETE_YEAR_RACE_3: 'distanceRace3'
                  }
                },
                distanceRace3: {
                  on: {
                    COMPLETE_DISTANCE_RACE_3: 'timeRace3'
                  }
                },
                timeRace3: {
                  on: {
                    COMPLETE_TIME_RACE_3: 'infoSubmitRace3'
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
        end: {type: 'final'}
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
    }},
    errorCalculatingRaceAbility: {
      on: {
        RETRY_CALCULATE_RACE_ABILITY: 'calculatingRaceAbility'
      }
    },
    raceAbility: {
      on: {
        DISPLAY_ALL_RACES: {
          target: 'races',
          actions: assign({races:(ctx, event) => filterRacesByAbility(ctx, event)})
        },
        DISPLAY_RACES_FOR_ABILITY: 'races',
      },
    },
    races: {
      on: {
        RACE_CLICKED: {
          actions: assign({
            raceFocused: (ctx, event) => ctx.races[event.data.id]
          })
        }
      }
    },
  }
}, {
  guards: {
    hasRaceInfo
  }
});

export default simpleMachine;

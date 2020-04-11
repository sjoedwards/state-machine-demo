const parallelMachine = Machine({
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
  }
});

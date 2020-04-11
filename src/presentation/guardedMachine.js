const hasRaceInfo = (_, event) => {
  return event.hasRaceInfo
}

const guardedMachine = Machine({
  id: 'guardedMachine',
  initial: 'trainingInfo',
  states: {
    trainingInfo: {
      on: {
        TRAINING_INFO_DONE: [
          {
          target: 'previousRaceInfo',
          cond: hasRaceInfo
          },
          {
            target: 'next',
          },
        ]
      },
    },
    previousRaceInfo: {
      on: {
        COMPLETE_PREVIOUS_RACE_INFO: {
          target: 'next',
        },
      },
    },
    next: {
      type: 'final'
    },
  },
});

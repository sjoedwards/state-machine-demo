
const hierarchicalMachine = Machine({
  id: 'hierarchicalMachine',
  initial: 'previous',
  states: {
    previous: {
      on: {
        'complete previous': 'trainingInfo'
      }
    },
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
      onDone: {
        target: 'next',
      },
    },
    next: {
      type: 'final',
    },
  },
});

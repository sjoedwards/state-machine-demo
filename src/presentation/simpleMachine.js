const simpleMachine = Machine({
  id: 'simpleMachine',
  initial: 'infoOne',
  states: {
    infoOne: {
      on: {
        INFO_SUBMIT_ONE: {
          target: 'infoTwo',
        },
      },
    },
    infoTwo: {
      on: {
        INFO_SUBMIT_TWO: {
          target: 'infoThree',
        },
      },
    },
    infoThree: {
      on: {
        INFO_SUBMIT_THREE: {}
      }
    },
  }
});
const canSkipTwo = (_, event) => {
  return event.canSkipTwo
}

const guardedMachine = Machine({
  id: 'guardedMachine',
  initial: 'one',
  states: {
    one: {
      on: {
        COMPLETE_ONE: [
          {
          target: 'three',
          cond: canSkipTwo
          },
          {
            target: 'two',
          },
        ]
      },
    },
    two: {
      on: {
        COMPLETE_TWO: {
          target: 'three',
        },
      },
    },
    three: {
      type: 'final'
    },
  },
}, {
  guards: {
    canSkipTwo
  }
});

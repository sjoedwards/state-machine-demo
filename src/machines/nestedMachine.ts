import { Machine } from 'xstate';

const simpleMachine = Machine({
  id: 'nestedMachine',
  initial: 'one',
  states: {
    one: {
      id: 'oneNested',
      initial: 'a',
      states: {
        a: {
          on: {
            COMPLETE_A: {
              target: 'b',
            },
          },
        },
        b: {
          on: {
            COMPLETE_B: {
              target: 'c',
            },
          },
        },
        c: {
          type: 'final',
        },
      },
      onDone: 'two',
    },
    two: {
      on: {
        COMPLETE_TWO: {
          target: 'three',
        },
      },
    },
    three: {
      on: {
        COMPLETE_THREE: {
          target: 'four',
        },
      },
    },
    four: {
      type: 'final',
    },
  },
});

export default simpleMachine;

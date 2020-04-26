import { Machine } from 'xstate';

const hierarchicalMachine = Machine({
  id: 'hierarchicalMachine',
  initial: 'one',
  states: {
    one: {
      id: 'one',
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
      onDone: {
        target: 'two',
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

export default hierarchicalMachine;

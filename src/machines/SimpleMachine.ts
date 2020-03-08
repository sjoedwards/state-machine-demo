import { Machine } from 'xstate';

const simpleMachine = Machine({
  id: 'simpleMachine',
  initial: 'one',
  states: {
    one: {
      on: {
        COMPLETE_ONE: {
          target: 'two',
        },
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

export default simpleMachine;

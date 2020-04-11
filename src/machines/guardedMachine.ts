import { Machine, actions } from 'xstate';

const canSkipTwo = (_: any, event: any): boolean => {
  return event.canSkipTwo
}

const guardedMachine = Machine<any, any, any>({
  id: 'guardedMachine',
  initial: 'one',
  states: {
    one: {
      on: {
        COMPLETE_ONE: [
          {
            target: 'three',
            cond: 'canSkipTwo'
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

export default guardedMachine;

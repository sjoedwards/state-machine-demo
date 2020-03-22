import { Machine, assign } from 'xstate';

const parallelMachine = Machine({
  id: 'parallelMachine',
  initial: 'start',
  states: {
    start: {
      initial: 'one',
      type: 'parallel',
      states: {
        one: {
          id: 'one',
          initial: 'a',
          states: {
            a: {
              on: {
                COMPLETE_A: 'b'
              }
            },
            b: {
              on: {
                COMPLETE_B: 'c'
              }
            },
            c: {
              type: 'final'
            }
          },
        },
        two: {
          id: 'two',
          initial: 'd',
          states: {
            d: {
              on: {
                COMPLETE_D: 'e'
              }
            },
            e: {
              on: {
                COMPLETE_E: 'f'
              }
            },
            f: {
              type: 'final'
            }
          },
        },
      },
      onDone: {
        target: 'end',
        actions: () => console.log('test')
      }
    },
    end: {type: 'final'}
  }
}, {
  actions: {
    alertDone: () => {
      console.log('executing?')
    }
  }
});

export default parallelMachine;

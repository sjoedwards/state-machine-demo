import { Machine } from 'xstate';

const parallelMachine = Machine({
  id: 'parallelMachine',
  initial: 'start',
  states: {
    start: {
      type: 'parallel',
      states: {
        1: {
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
        2: {
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
        3: {
          id: 'three',
          initial: 'g',
          states: {
            g: {
              on: {
                COMPLETE_G: 'h'
              }
            },
            h: {
              on: {
                COMPLETE_H: 'i'
              }
            },
            i: {
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

export default parallelMachine;

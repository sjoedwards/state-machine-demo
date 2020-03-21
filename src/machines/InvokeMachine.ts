import { Machine, actions, assign } from 'xstate';
const { escalate } = actions;

const wait = (amount = 0) => new Promise(resolve => setTimeout(resolve, amount));

const getData = async (_: any, event: any): Promise<String> => {

  await wait(2000)
  if (event.payload === true) {
    throw new Error('error')
  }
  return 'test'
}

interface InvokeMachineContext {
  data: string
}


const invokeMachine = Machine<InvokeMachineContext, any, any>({
  id: 'invokeMachine',
  initial: 'one',
  context: {data: ''},
  states: {
    one: {
      on: {
        COMPLETE_ONE: {
          target: 'two',
        },
      },
    },
    two: {
      invoke: {
        id: 'getData',
        src: getData,
        onDone: {
          target: 'three',
          actions: assign({
            data: (_, event) => event.data
          })
        },
        onError: 'error'
      }
    },
    three: {
      type: 'final',
    },
    error: {
      type: 'final',
    },
  },
});

export default invokeMachine;

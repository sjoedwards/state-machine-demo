import { Machine, actions, assign } from 'xstate';
const { escalate } = actions;

const canSkipTwo = (_:any, event:any):boolean => {
  return event.payload.canSkipTwo
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
}, {guards: {
  canSkipTwo
}});

export default invokeMachine;

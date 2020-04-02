const getData = async (_, event) => {
  // In a real application, this might be something like an AJAX call
  return [{name: 'Chester Marathon', id: 1}]
}


const invokeMachine = Machine({
  id: 'invokeMachine',
  initial: 'previous',
  context: {data: []},
  states: {
    previous: {
      on: {
        COMPLETE_PREVIOUS: {
          target: 'Loading Wizard',
        },
      },
    },
    'Loading Wizard': {
      invoke: {
        id: 'getData',
        src: getData,
        onDone: {
          target: 'next',
          actions: assign({
            data: (_, event) => event.data
          })
        },
        onError: 'error'
      }
    },
    next: {
      type: 'final',
    },
    error: {
      on: {
        RETRY: {
          target: 'Loading Wizard',
        },
      },
    },
  },
});


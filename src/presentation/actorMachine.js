const raceMachine = Machine({
  id: 'raceMachine',
  initial: 'unselected',
  states: {
    unselected: {
      on: {
        SELECTED: {
          actions: sendParent((ctx) => ({type: 'SELECTED', race: ctx})),
          target: 'selected'
        }
      },
    },
    selected: {
      on: {
        UNSELECTED: {
          actions: sendParent((ctx) => ({type: 'UNSELECTED', race: ctx})),
          target: 'unselected'
        }
      }
    }
  }
});

const actorMachine = Machine({
  id: 'actorMachine',
  initial: 'initializing',
  context: {
    races: [{
      id: 1,
      name: 'Chester Marathon',
    }, {
      id: 2,
      name: ' Leeds 10K',
    }],
    selectedRaces: []
  },
  states: {
    initializing: {
      entry: assign({
        races: (ctx) => {
          return ctx.races.map((race) => ({
            ...race,
            ref: spawn(raceMachine.withContext(race))
          }));
        }
      }),
      on: {
        '': 'idle'
      },
    },
    idle: {
      on: {
        SELECTED: {
          actions: assign({
            selectedRaces: (ctx, event) => {
            return [...ctx.selectedRaces, event.race]
            }
          })
        },
        UNSELECTED: {
          actions: assign({
            selectedRaces: (ctx, event) => {
              return ctx.selectedRaces.filter((race) => race.id !== event.race.id)
            }
          })
        }
      }
    },
  }
});

import { Machine, assign, sendParent, spawn } from 'xstate';

interface RaceContext {
  id?: Number,
  name?: String
}

interface ActorContext {
  selectedRaces: Array<RaceContext>
  races: Array<RaceContext>
}

const raceMachine = Machine<RaceContext, any, any>({
  id: 'raceMachine',
  initial: 'unselected',
  states: {
    unselected: {
      on: {
        SELECTED: {
          actions: sendParent((ctx: RaceContext) => ({type: 'SELECTED', race: ctx})),
          target: 'selected'
        }
      },
    },
    selected: {
      on: {
        UNSELECTED: {
          actions: sendParent((ctx: RaceContext) => ({type: 'UNSELECTED', race: ctx})),
          target: 'unselected'
        }
      }
    }
  }
});

const actorMachine = Machine<ActorContext, any, any>({
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
        races: (ctx: any, e) => {
          return ctx.races.map((race: any) => ({
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
              return ctx.selectedRaces.filter((race:RaceContext) => race.id !== event.race.id)
            }
          })
        }
      }
    },
  }
});

export default actorMachine;
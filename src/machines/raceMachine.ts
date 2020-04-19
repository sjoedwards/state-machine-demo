import { Machine, sendParent } from 'xstate';
import {Race} from '../interfaces'

export default Machine<Race, any, any>({
  id: 'raceMachine',
  initial: 'unselected',
  states: {
    unselected: {
      on: {
        SELECTED: {
          actions: sendParent((ctx: Race) => ({type: 'SELECTED', race: ctx})),
        }
      },
    },
  }
});
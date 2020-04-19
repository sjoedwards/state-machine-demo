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
          target: 'selected'
        }
      },
    },
    selected: {
      on: {
        UNSELECTED: {
          actions: sendParent((ctx: Race) => ({type: 'UNSELECTED', race: ctx})),
          target: 'unselected'
        }
      }
    }
  }
});
import { StateNodesConfig, StateValue } from 'xstate';

export interface MachineBlockProps {
  states: StateNodesConfig<any, any, any>,
  send: Function,
  currentMatches: Function
}

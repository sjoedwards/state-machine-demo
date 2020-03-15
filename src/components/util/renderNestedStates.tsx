import { StateNodeConfig, StateValue } from 'xstate';
import renderStateItems from './renderStateItems';


export default (config : StateNodeConfig<any, any, any>, currentValue: StateValue) => {
  console.log(config.states);
  renderStateItems({ states: config.states, send: () => true, currentValue });
};

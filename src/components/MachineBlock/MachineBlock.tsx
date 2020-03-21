import React from 'react';
import { State, StateValue } from 'xstate';


export interface MachineBlockProps {
  current: State<any, any, any>,
  send: Function,
}
const MachineBlock = ({ current, send }: MachineBlockProps) => {
  const event = `COMPLETE_${current.value.toString().toUpperCase()}`
  return(
  <div className="generic__row">
    <div className="machine__state-item__wrapper">
      <p>
        Currently in state {current.value}
      </p>
      <div className="machine__button">
        <button type="button" onClick={() => send(event)}>Complete {current.value}</button>
      </div>
    </div>
  </div>
)};


export default MachineBlock;

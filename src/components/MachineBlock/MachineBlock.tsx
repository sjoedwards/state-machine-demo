import React from 'react';
import { StateNodesConfig, StateValue } from 'xstate';

const renderButton = (send: Function, event: any) => (
  <div>
    <button type="button" onClick={() => send(event)}>{event}</button>
  </div>
);

const renderStateItems = ({ states, send, currentValue }: MachineBlockProps) => Object.values(states).map((state) => (
  <div key={state.key} className={currentValue === state.key ? 'active' : ''}>
    <div className="machine__state-item__wrapper">
      <div className="machine__state-item__content-row">{state.key}</div>
      {state.type === 'final' && <div className="machine__state-item__content-row">Final</div>}
      <div className="generic__row">
        {state.events[0] && renderButton(send, state.events[0])}
      </div>
    </div>
  </div>
));

interface MachineBlockProps {
  states: StateNodesConfig<any, any, any>,
  send: Function,
  currentValue: StateValue
}


const MachineBlock = ({ states, send, currentValue }: MachineBlockProps) => (
  <div className="generic__row">
    {renderStateItems({ states, send, currentValue })}
  </div>
);


export default MachineBlock;


import { StateNodesConfig, StateValue } from 'xstate';
import React from 'react';
import renderNestedStates from './renderNestedStates';
import { MachineBlockProps } from '../types/MachineBlockProps';

const renderButton = (send: Function, event: any) => (
  <div>
    <button type="button" onClick={() => send(event)}>{event}</button>
  </div>
);

export default ({ states, send, currentValue }: MachineBlockProps) => Object.values(states).map((state) => (
  <div key={state.key} className={currentValue === state.key ? 'active' : ''}>
    <div className="machine__state-item__wrapper">
      <div className="machine__state-item__content-row">{state.key}</div>
      {state.type === 'final' && <div className="machine__state-item__content-row">Final</div>}

      {state.config.id ? renderNestedStates(state.config, currentValue) : (
        <div className="generic__row">
          {state.events[0] && renderButton(send, state.events[0])}
        </div>
      )}
    </div>
  </div>
));

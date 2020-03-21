import React from 'react';
import { State, StateValue } from 'xstate';


export interface MachineBlockProps {
  current: State<any, any, any>,
  send: Function,
  shouldRenderSend?: Boolean
}
const MachineBlock = ({ current, send, shouldRenderSend = true }: MachineBlockProps) => {
  const event = `COMPLETE_${current.value.toString().toUpperCase()}`
  return (
    <div className="generic__row">
      <div className="machine__state-item__wrapper">
        <p>
          Currently in state {current.value}
        </p>
        {shouldRenderSend && !current.done && (
          <div className="generic__button generic__button__submit">
            <button type="button" onClick={() => send(event)}>Complete {current.value}</button>
          </div>
        )}
        {!shouldRenderSend && !current.done && (
            <div className="generic__row">
              <div className="loader"></div>
            </div>
        )}
      </div>
    </div>
  )
};


export default MachineBlock;

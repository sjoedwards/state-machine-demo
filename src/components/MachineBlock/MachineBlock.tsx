import React from 'react';
import { State, StateValue } from 'xstate';


export interface MachineBlockProps {
  current: State<any, any, any>,
  send: Function,
  shouldRenderSend?: boolean
}

export interface RenderBlockProps {
  value: StateValue,
  done?: boolean,
  shouldRenderSend: boolean,
  send: Function
}

const renderBlock = ({ value, done, shouldRenderSend, send }: RenderBlockProps) => {
  const event = `COMPLETE_${value.toString().toUpperCase()}`

  return (
    <div className="generic__row">
      <div className="machine__state-item__wrapper">
        <p>
          Currently in state {value}
        </p>
        {shouldRenderSend && !done && (
          <div className="generic__button generic__button__submit">
            <button type="button" onClick={() => send(event)}>Complete {value}</button>
          </div>
        )}
        {!shouldRenderSend && !done && (
          <div className="generic__row">
            <div className="loader"></div>
          </div>
        )}
      </div>
    </div>
  )
}


const MachineBlock = ({ current, send, shouldRenderSend = true }: MachineBlockProps) => {
  if (typeof current.value === 'object') {
    const parentStateValue = Object.keys(current.value)[0]
    console.log('current.value: ', current.value[parentStateValue]);
    return (
      <div className="generic__row">
        <div className="machine__state-item__wrapper">
          <p>
            Currently in parent state {parentStateValue}
          </p>
          {renderBlock({ value: current.value[parentStateValue], done: current.done, shouldRenderSend, send })}
        </div>
      </div>
    )
  }
  return (
    renderBlock({ value: current.value, done: current.done, shouldRenderSend, send })
  )
};


export default MachineBlock;

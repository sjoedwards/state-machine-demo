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
    <div className="machine__state-item__wrapper">
      <p>
        State: {value}
      </p>
      {shouldRenderSend && !done && (
        <div className="generic__button generic__button__submit">
          {value === 'error' ? (
            <button type="button" onClick={() => send('retry')}>Retry</button>
          ):(
            <button type="button" onClick={() => send(event)}>Complete {value}</button>
          )}
        </div>
      )}
      {!shouldRenderSend && !done && (
        <div className="generic__row">
          <div className="loader"></div>
        </div>
      )}
    </div>
  )
}


const MachineBlock = ({ current, send, shouldRenderSend = true }: MachineBlockProps) => {
  if (typeof current.value === 'object') {
    const parentStates = Object.entries(current.value).sort()

    const parentStatesMap = parentStates.map(([parentStatekey, parentStateValue], index) => {
      const isParentStateValueObject = typeof parentStateValue === 'object'
      const nestedStates = Object.entries(parentStateValue).sort()
      const nestedStatesMap = nestedStates.map(([nestedStateskey, nestedStatesValue], index) => {
        return (
          <div key={index} className="machine__state-item__wrapper">
            <p>
              Child State: {nestedStateskey}
            </p>
            {renderBlock({ value: nestedStatesValue, done: current.done, shouldRenderSend, send })}
          </div>
        )
      })
      return (
        <div key={index} className="machine__state-item__wrapper">
          <p>
            Parent State: {parentStatekey}
          </p>
          {!isParentStateValueObject && renderBlock({ value: parentStateValue, done: current.done, shouldRenderSend, send })}
          {isParentStateValueObject && (<div className='generic__row'>{nestedStatesMap}</div>)}
        </div>
      )
    }

    );
    return (<>{parentStatesMap}</>)
    // for (let parentStateValue in current.value) {
    //   console.log('parentStateValue: ', parentStateValue);
    //   return (
    // <div className="generic__row">
    //   <div className="machine__state-item__wrapper">
    //     <p>
    //       Currently in parent state {parentStateValue}
    //     </p>
    //     {renderBlock({ value: current.value[parentStateValue], done: current.done, shouldRenderSend, send })}
    //   </div>
    // </div>
    //   )
    // }
  }
  return (
    renderBlock({ value: current.value, done: current.done, shouldRenderSend, send })
  )
};


export default MachineBlock;

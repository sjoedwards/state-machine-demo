import React from 'react'
import { State } from 'xstate'
interface TrainingInfoInterface {
  current: State<any>,
  send: Function,
}

export default ({ current, send }: TrainingInfoInterface) => {
  const state = current.value;
  return (<div className="machine__state-item__wrapper">
    <div className="generic__row">
      <div className="machine__state-item__wrapper">
      </div>
      <div className="machine__state-item__wrapper">
      </div>
      <div className="machine__state-item__wrapper">
      </div>
    </div>
    <div className="generic__row">
      <div className="generic__button generic__button__submit">
        <button type="button" onClick={() => send('TEST')}>Continue</button>
      </div>
    </div>
  </div>)
};
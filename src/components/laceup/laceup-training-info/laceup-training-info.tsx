import React from 'react'
import { State } from 'xstate'
interface TrainingInfoInterface {
  current: State<any>,
  send: Function,
}

export default ({ current, send }: TrainingInfoInterface) => {
  const {matches} = current

  const renderTrainingInfoPanel = () => {
    if (matches('trainingInfo.races')) {
      return (
        <>
          <div className="generic__row">
            <p>How many races have you previously completed?</p>
          </div>
          <div className="generic__row">
            <input value={current.context.numPreviousRaces} type="number" className="generic__input" onChange={event => send({type: 'PREVIOUS_RACE_INFO_INPUT', input: event.target.value})}></input>
          </div>
          <div className="generic__row">
            <div className="generic__button generic__button__submit">
              <button type="button" onClick={() => send('NUM_RACES_SUBMIT')}>Continue</button>
            </div>
          </div>
        </>
      );
    }
    if (matches('trainingInfo.kmPerWeek')) {
      return (
        <>
          <div className="generic__row">
            <p>How far do you train in total a week (km)?</p>
          </div>
          <div className="generic__row">
            <input value={current.context.kmPerWeek} type="number" className="generic__input" onChange={event => send({type: 'KM_PER_WEEK_INPUT', input: event.target.value})}></input>
          </div>
          <div className="generic__row">
            <div className="generic__button generic__button__submit">
              <button type="button" onClick={() => send('KM_PER_WEEK_SUBMIT')}>Continue</button>
            </div>
          </div>
        </>
      );
    }
    if (matches('trainingInfo.runsPerWeek')) {
      return (
        <>
          <div className="generic__row">
            <p>How many training runs do you complete a week?</p>
          </div>
          <div className="generic__row">
            <input value={current.context.runsPerWeek} type="number" className="generic__input" onChange={event => send({type: 'RUNS_PER_WEEK_INPUT', input: event.target.value})}></input>
          </div>
          <div className="generic__row">
            <div className="generic__button generic__button__submit">
              <button type="button" onClick={() => send('RUNS_PER_WEEK_SUBMIT')}>Continue</button>
            </div>
          </div>
        </>
      );
    }
  }

  return (
  <div className="machine__state-item__wrapper">
      {renderTrainingInfoPanel()}
  </div>)
};
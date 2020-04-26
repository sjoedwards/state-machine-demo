import React from 'react'
import { State } from 'xstate'
interface PreviousRaceInterface {
  current: State<any>,
  send: Function,
}


export default ({ current, send }: PreviousRaceInterface) => {
  const {matches} = current
  const renderPreviousRaceInfo = () => {
    return ['One', 'Two', 'Three'].map((value, index) => {
      const raceNum = index + 1
      if (matches(`previousRaceInfo.start.prevRace${value}.yearRace${raceNum}`)) {
        return (
          <div key={index} className="machine__state-item__wrapper">
          <div className="generic__row">
            <p>Year race run</p>
          </div>
          <div className="generic__row">
            <input value={current.context.previousRuns[`previousRun${value}`].date} type="number" className="generic__input" onChange={event => send({type: `INPUT_YEAR_RACE_${raceNum}`, input: event.target.value})}></input>
          </div>
          <div className="generic__row">
            <div className="generic__button generic__button__submit">
              <button type="button" onClick={() => send(`COMPLETE_YEAR_RACE_${raceNum}`)}>Continue</button>
            </div>
          </div>
        </div>
        )
      }
      if (matches(`previousRaceInfo.start.prevRace${value}.distanceRace${raceNum}`)) {
        return (
          <div key={index} className="machine__state-item__wrapper">
          <div className="generic__row">
            <p>Distance of race run / Km</p>
          </div>
          <div className="generic__row">
            <input value={current.context.previousRuns[`previousRun${value}`].distance} type="number" className="generic__input" onChange={event => send({type: `INPUT_DISTANCE_RACE_${raceNum}`, input: event.target.value})}></input>
          </div>
          <div className="generic__row">
            <div className="generic__button generic__button__submit">
              <button type="button" onClick={() => send(`COMPLETE_DISTANCE_RACE_${raceNum}`)}>Continue</button>
            </div>
          </div>
        </div>
        )
      }
      if (matches(`previousRaceInfo.start.prevRace${value}.timeRace${raceNum}`)) {
        return (
          <div key={index} className="machine__state-item__wrapper">
          <div className="generic__row">
            <p>Time completed / minutes</p>
          </div>
          <div className="generic__row">
            <input value={current.context.previousRuns[`previousRun${value}`].time} type="number" className="generic__input" onChange={event => send({type: `INPUT_TIME_RACE_${raceNum}`, input: event.target.value})}></input>
          </div>
          <div className="generic__row">
            <div className="generic__button generic__button__submit">
              <button type="button" onClick={() => send(`COMPLETE_TIME_RACE_${raceNum}`)}>Continue</button>
            </div>
          </div>
        </div>
        )
      }
      return (
        <div key={index} className="machine__state-item__wrapper">
          <div className="generic__row">
            <p>Completed</p>
          </div>
        </div>
      )
    })
  }

  return (
  <div className="machine__state-item__wrapper">
    <div className="generic__row">
      <p>Enter info for the last three races you have run</p>
    </div>
    <div className="generic__row">
    {renderPreviousRaceInfo()}
    </div>
  </div>)
};
import React from 'react'
import { State } from 'xstate'

interface RaceAbilityInterface {
  current: State<any>,
  send: Function,
}

export default ({ current, send }: RaceAbilityInterface) => {
  const state = current.value;
  const { matches, context } = current;


  return (
    <div className="machine__state-item__wrapper">
      <>
        <div className="generic__row">
          <p>Your race ability is <b>{context.ability}</b></p>
        </div>
        <div className="generic__row">
          <div className="generic__button generic__button__submit">
            <button type="button" onClick={() => send('DISPLAY_RACES_FOR_ABILITY')}>See races at your ability</button>
          </div>
          <div className="generic__button generic__button__submit">
            <button type="button" onClick={() => send('DISPLAY_ALL_RACES')}>See all races</button>
          </div>
          <div className="generic__button generic__button__submit">
            <button type="button" onClick={() => send('RETRY_WIZARD')}>Retry Wizard</button>
          </div>
        </div>
      </>
    </div>)
};
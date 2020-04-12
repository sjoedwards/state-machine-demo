import React from 'react'
import {State} from 'xstate'

interface TrainingInfoInterface {
  current: State<any, any, any>
  send: Function,
}

export default ({ send }: TrainingInfoInterface) => (
  <div className="machine__state-item__wrapper">
    <div className="generic__button generic__button__submit">
      TEST
    </div>
  </div>
)
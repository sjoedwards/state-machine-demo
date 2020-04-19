import React from 'react'

interface InfoInterface {
  body: String,
  send: Function,
  id: Number
}

export default ({body, send, id}: InfoInterface) => (
  <div className="machine__state-item__wrapper">
    <div className="generic__row">
      <p>{body}</p>
    </div>
    <div className="generic__row generic__button generic__button__submit">
      <button type="button" onClick={() => send(`INFO_SUBMIT_${id}`)}>Continue</button>
    </div>
  </div>
)
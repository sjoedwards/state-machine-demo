import React from 'react'

interface InfoInterface {
  body: String,
  send: Function,
  id: Number
}

export default ({body, send, id}: InfoInterface) => (
  <div className="machine__state-item__wrapper">
    <p>{body}</p>
    <div className="generic__button generic__button__submit">
      <button type="button" onClick={() => send(`INFO_SUBMIT_${id}`)}>Continue</button>
    </div>
  </div>
)
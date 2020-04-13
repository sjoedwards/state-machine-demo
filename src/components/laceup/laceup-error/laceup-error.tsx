import React from 'react'

interface ErrorInterface {
  body: String,
  send: Function,
}

export default ({body, send}: ErrorInterface) => (
  <div className="machine__state-item__wrapper">
    <p>{body}</p>
    <div className="generic__button generic__button__submit">
      <button type="button" onClick={() => send(`RETRY_WIZARD`)}>Retry</button>
    </div>
  </div>
)
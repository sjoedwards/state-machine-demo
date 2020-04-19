import React from 'react'
import { State } from 'xstate'
import LaceupRaceTile from '../laceup-race-tile/laceup-race-tile'
import LaceupModal from '../laceup-modal/laceup-modal'
import { Race } from '../../../interfaces'

interface RacesInterface {
  current: State<any>,
  send: Function,
}

export default ({ current, send }: RacesInterface) => {
  const { context } = current;

  const customStyle = {
    content: {
      margin: "20px",
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
      minWidth: '200px',
      background:'none',
      border: 'none',
      height: '500px',
      padding: '0 20px',
      position: "static"
    } as React.CSSProperties
  }
    const renderRaceTiles = () => {
      return context.races.map((race: Race, index: number) => {
        return (
          <LaceupRaceTile key={index} id={index} race={race} selectTile={(id: number) => console.log(id)}/>
        )
      })
    }

    const renderNoRacesFound = () => (
      <p>No races available!</p>
    )
    return (
      <div className="App">
        <LaceupModal race={context?.selectedRace} modalOpen={context?.modalOpen} customStyle={customStyle} toggleModal={() => console.log('toggle')}/>
          <div className="generic__row generic__button generic__button__submit">
            <button type="button" onClick={() => send('RETRY_WIZARD')}>Retry Wizard</button>
          </div>
          <div className="main laceup__row">
            {context?.races?.length ? renderRaceTiles() : renderNoRacesFound()}
          </div>
          <div className="laceup__footer__container">
            <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/vitaly-gorbachev" title="Vitaly Gorbachev">Vitaly Gorbachev</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div>
          </div>
      </div>
    );
};
import React, { useReducer, useEffect } from 'react';
import './App.css';
import LaceUpModal from './components/laceup-modal/laceup-modal'
import LaceUpBanner from './components/laceup-banner/laceup-banner'
import LaceUpRaceTile from './components/laceup-race-tile/laceup-race-tile'
import LaceupLoader from './components/laceup-loader/laceup-loader'
import store from './store/store'
import reducer from './reducer/reducer'

const async = window.location.search.match('async')?.length

const initialStore = store(async)

const customStyle = {
  content: {
    margin: "20px",
    position: "static",
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    minWidth: '200px',
    background:'none',
    border: 'none',
    height: '500px',
    padding: '0 20px',
  }
}


function App() {

  const [state, dispatch] = useReducer(reducer, initialStore)

  useEffect(() => {
      (async () => await new Promise(async resolve => {

        return async && setTimeout(() => {
          resolve(
            dispatch({type: 'UPDATE_RACES', payload: [
                {
                  title: 'Test Marathon',
                  distance: {
                    short: '42.2K',
                    long: 'Full Marathon'
                  },
                }
              ]
            })
          )
        }, 3000);
      }))()
  }, [])

  const renderRaceTiles = () => {
    return state.races.map((race, index) => {
      return (
        <LaceUpRaceTile key={index} id={index} race={race} selectTile={(id) => dispatch({ type: 'SELECT_RACE', payload: id })}/>
      )
    })
  }
  return (
    <div className="App">
      <LaceUpModal race={state?.selectedRace} modalOpen={state?.modalOpen} customStyle={customStyle} toggleModal={() => dispatch({type: 'TOGGLE_MODAL'})}/>
      <LaceUpBanner />
        <div className="main laceup__row">
          {state?.races?.length ? renderRaceTiles() : <LaceupLoader />}
        </div>
    <div className="laceup__footer__container">
        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/vitaly-gorbachev" title="Vitaly Gorbachev">Vitaly Gorbachev</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div>
      </div>
  </div>
  );
}

export default App;

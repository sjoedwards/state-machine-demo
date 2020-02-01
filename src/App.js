import React, { useReducer } from 'react';
import './App.css';
import LaceUpModal from './components/laceup-modal/laceup-modal'
import LaceUpBanner from './components/laceup-banner/laceup-banner'
import LaceUpRaceTile from './components/laceup-race-tile/laceup-race-tile'
import LaceupLoader from './components/laceup-loader/laceup-loader'

const initialStore = {
  modalOpen: false,
  races: []
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'TOGGLE_MODAL':
      return {...state, modalOpen: !state.modalOpen}
    default:
      return
  }
}

const customStyle = {
  content: {
    margin: "20px",
    position: "static",
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    "min-width": '200px',
    background:'none',
    border: 'none',
    height: '500px',
    padding: '0 20px',
  }
}


function App() {

  const [state, dispatch] = useReducer(reducer, initialStore)

  const renderRaceTiles = () => {
    return (
      <LaceUpRaceTile toggleModal={() => dispatch({ type: 'TOGGLE_MODAL' })}/>
    )
  }
  return (
    <div className="App">
      <LaceUpModal race={state.selectedRace} modalOpen={state.modalOpen} customStyle={customStyle} toggleModal={() => dispatch({type: 'TOGGLE_MODAL'})}/>
      <LaceUpBanner />
        <div className="laceup__row main">
          {state.races && state.races.length ? renderRaceTiles() : <LaceupLoader />}
        </div>
    <div className="laceup__footer__container">
        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/vitaly-gorbachev" title="Vitaly Gorbachev">Vitaly Gorbachev</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div>
      </div>
  </div>
  );
}

export default App;

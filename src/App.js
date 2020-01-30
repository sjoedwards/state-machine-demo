import React from 'react';
import './App.css';
import icon from './icon.svg'

function App() {
  return (
    <div className="App">
      <div className="laceup__row laceup__banner__container">
        <div className="laceup__grid-item--2">
          <div className="test">
            <img src={icon}/>
            <p className="laceup__banner__text">LACE UP</p>
          </div>
        </div>
        <div className="laceup__grid-item--2">
          <div className="laceup__search__container">
            <div className="laceup__search__search-box">
              <input type="text" placeholder="Search.." />
            </div>
          </div>
        </div>
      </div>

      <div className="laceup__row">
        <div className="laceup__grid-item--3 laceup__race-tile__wrapper">
            <div className="laceup__race-tile__container"></div>
        </div>
        <div className="laceup__grid-item--3 laceup__race-tile__wrapper">
            <div className="laceup__race-tile__container"></div>
        </div>
        <div className="laceup__grid-item--3 laceup__race-tile__wrapper">
            <div className="laceup__race-tile__container"></div>
        </div>
        <div className="laceup__grid-item--3 laceup__race-tile__wrapper">
            <div className="laceup__race-tile__container"></div>
        </div>
        <div className="laceup__grid-item--3 laceup__race-tile__wrapper">
            <div className="laceup__race-tile__container"></div>
        </div>
        <div className="laceup__grid-item--3 laceup__race-tile__wrapper">
            <div className="laceup__race-tile__container"></div>
        </div>
        <div className="laceup__grid-item--3 laceup__race-tile__wrapper">
            <div className="laceup__race-tile__container"></div>
        </div>
        <div className="laceup__grid-item--3 laceup__race-tile__wrapper">
            <div className="laceup__race-tile__container"></div>
        </div>
        <div className="laceup__grid-item--3 laceup__race-tile__wrapper">
            <div className="laceup__race-tile__container"></div>
        </div>
      </div>
    </div>
  );
}

export default App;

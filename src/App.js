import React from 'react';
import './App.css';
import icon from './icon.svg'
import star from './star.svg'
import incline from './incline.svg'
import distance from './distance.svg'


function App() {
  return (
    <div className="App">
      <div className="laceup__row laceup__banner__container">
        <div className="laceup__grid-item--2">
          <div className="test">
            <img src={icon} alt="laceup icon"/>
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
            <div className="laceup__race-tile__container hvr-grow-shadow">
              <div className="laceup__race-tile__image"></div>
              <div className="laceup__race-tile__info">
              <p className="laceup__race-tile__title">Boston Marathon</p>
              <div className="laceup__race-tile__metrics-container">
                  <div className="laceup__race-tile__metrics-segment">
                    <img className="laceup__race-tile__metrics-icon" src={distance} alt="distance icon" />
                    <p>42.2</p>
                  </div>
                  <div className="laceup__race-tile__metrics-segment">
                    <img className="laceup__race-tile__metrics-icon" src={incline} alt="incline icon" />
                    <p>4</p>
                  </div>
                  <div className="laceup__race-tile__metrics-segment">
                    <img className="laceup__race-tile__metrics-icon" src={star} alt="star icon" />
                    <p>4</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className="laceup__grid-item--3 laceup__race-tile__wrapper">
            <div className="laceup__race-tile__container hvr-grow-shadow">
              <div className="laceup__race-tile__image">
              </div>
            </div>
        </div>
        <div className="laceup__grid-item--3 laceup__race-tile__wrapper">
            <div className="laceup__race-tile__container hvr-grow-shadow">
              <div className="laceup__race-tile__image">
              </div>
            </div>
        </div>
        <div className="laceup__grid-item--3 laceup__race-tile__wrapper">
            <div className="laceup__race-tile__container hvr-grow-shadow">
              <div className="laceup__race-tile__image">
              </div>
            </div>
        </div>
        <div className="laceup__grid-item--3 laceup__race-tile__wrapper">
            <div className="laceup__race-tile__container hvr-grow-shadow">
              <div className="laceup__race-tile__image">
              </div>
            </div>
        </div>
        <div className="laceup__grid-item--3 laceup__race-tile__wrapper">
            <div className="laceup__race-tile__container hvr-grow-shadow">
              <div className="laceup__race-tile__image">
              </div>
            </div>
        </div>
        <div className="laceup__grid-item--3 laceup__race-tile__wrapper">
            <div className="laceup__race-tile__container hvr-grow-shadow">
              <div className="laceup__race-tile__image">
              </div>
            </div>
        </div>
        <div className="laceup__grid-item--3 laceup__race-tile__wrapper">
            <div className="laceup__race-tile__container hvr-grow-shadow">
              <div className="laceup__race-tile__image">
              </div>
            </div>
        </div>
        <div className="laceup__grid-item--3 laceup__race-tile__wrapper">
            <div className="laceup__race-tile__container hvr-grow-shadow">
              <div className="laceup__race-tile__image">
              </div>
            </div>
        </div>
        <div className="laceup__grid-item--3 laceup__race-tile__wrapper">
            <div className="laceup__race-tile__container hvr-grow-shadow">
              <div className="laceup__race-tile__image">
              </div>
            </div>
        </div>
        <div className="laceup__grid-item--3 laceup__race-tile__wrapper">
            <div className="laceup__race-tile__container hvr-grow-shadow">
              <div className="laceup__race-tile__image">
              </div>
            </div>
        </div>
    </div>
    <div className="laceup__footer__container">
        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/vitaly-gorbachev" title="Vitaly Gorbachev">Vitaly Gorbachev</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div>
      </div>
  </div>
  );
}

export default App;

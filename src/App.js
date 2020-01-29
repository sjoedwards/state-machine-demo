import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="laceup__row">
        <div className="laceup__grid-item">
          <p className="laceup__banner__text">LACE UP</p>
        </div>
        <div className="laceup__grid-item">
          <div className="laceup__search__container">
            <div className="laceup__search__search-box">
              <input type="text" placeholder="Search.." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

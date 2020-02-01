import React from 'react';
import inverseLogo from '../../logo--invert.svg';

const LaceupLoader = () => {
  return (
    <div className="laceup__loader__container">
      <svg
        className="laceup__loader__icon--svg"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 25 50"
        width="25"
        height="50"
        style={{background: 'black'}}
      >
        <defs>
          <path d="M21.16 20.38L3.55 6.6" id="laceup__loader__icon--svg--top"></path>
          <path d="M21.45 34.15L3.84 20.38" id="laceup__loader__icon--svg--middle"></path>
          <path d="M21.45 47.93L3.84 34.15" id="laceup__loader__icon--svg--bottom"></path>
        </defs>
        <g>
          <g>
            <g>
              <g>
                <use
                  href="#laceup__loader__icon--svg--bottom"
                  opacity="1"
                  fill-opacity="1"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-opacity="1"
                ></use>
              </g>
            </g>
            <g>
              <g>
                <use
                  href="#laceup__loader__icon--svg--middle"
                  opacity="1"
                  fill-opacity="0"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-opacity="1"
                ></use>
              </g>
            </g>
            <g>
              <g>
                <use
                  href="#laceup__loader__icon--svg--top"
                  opacity="1"
                  fill-opacity="0"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-opacity="1"
                ></use>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default LaceupLoader;

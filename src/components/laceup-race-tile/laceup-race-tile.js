import React from 'react';
import star from '../../star.svg'
import incline from '../../incline.svg'
import distance from '../../distance.svg'
import LaceUpRaceTileImage from './lace-up-race-tile-image/lace-up-race-tile-image'

const LaceupRaceTile = props => {
  return (
    <div className="laceup__grid-item--3 laceup__race-tile__wrapper">
      <div
        onClick={() => props.selectTile(props.id)}
        className="laceup__race-tile__container hvr-grow-shadow"
      >
        <LaceUpRaceTileImage race={props.race} />
        <div className="laceup__race-tile__info">
          <p className="laceup__race-tile__title">{props?.race?.title}</p>
          <div className="laceup__race-tile__metrics-container">
            <div className="laceup__race-tile__metrics-segment">
              <img
                className="laceup__race-tile__metrics-icon"
                src={distance}
                alt="distance icon"
              />
            <p>{props?.race?.distance?.short}</p>
            </div>
            <div className="laceup__race-tile__metrics-segment">
              <img
                className="laceup__race-tile__metrics-icon"
                src={incline}
                alt="incline icon"
              />
              <p>{props?.race?.incline?.score}</p>
            </div>
            <div className="laceup__race-tile__metrics-segment">
              <img
                className="laceup__race-tile__metrics-icon"
                src={star}
                alt="star icon"
              />
              <p>{props?.race?.overall?.score}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaceupRaceTile;

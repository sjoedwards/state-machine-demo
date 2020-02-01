import React from 'react';
import star from '../../star.svg'
import incline from '../../incline.svg'
import distance from '../../distance.svg'

const LaceupRaceTile = props => {
  return (
    <div className="laceup__grid-item--3 laceup__race-tile__wrapper">
      <div
        onClick={() => props.toggleModal()}
        className="laceup__race-tile__container hvr-grow-shadow"
      >
        <div className="laceup__race-tile__image"></div>
        <div className="laceup__race-tile__info">
          <p className="laceup__race-tile__title">Boston Marathon</p>
          <div className="laceup__race-tile__metrics-container">
            <div className="laceup__race-tile__metrics-segment">
              <img
                className="laceup__race-tile__metrics-icon"
                src={distance}
                alt="distance icon"
              />
              <p>42.2</p>
            </div>
            <div className="laceup__race-tile__metrics-segment">
              <img
                className="laceup__race-tile__metrics-icon"
                src={incline}
                alt="incline icon"
              />
              <p>8</p>
            </div>
            <div className="laceup__race-tile__metrics-segment">
              <img
                className="laceup__race-tile__metrics-icon"
                src={star}
                alt="star icon"
              />
              <p>9</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaceupRaceTile;

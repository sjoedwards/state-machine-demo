import React from 'react';
import star from '../../../star.svg';
import incline from '../../../incline.svg';
import distance from '../../../distance.svg';

const LaceUpModalMetrics = props => {
  return (
    <div className="laceup__modal__metrics-container">
      <p className="laceup__modal__title">{props?.race?.title}</p>
      <div className="laceup__modal__metrics-segment">
        <img
          className="laceup__race-tile__metrics-icon"
          src={distance}
          alt="distance icon"
        />
        <p className="laceup__modal__metrics-text">{props?.race?.distance?.long}, {props?.race?.distance?.short}</p>
      </div>
      <div className="laceup__modal__metrics-segment">
        <img
          className="laceup__race-tile__metrics-icon"
          src={incline}
          alt="incline icon"
        />
        <p className="laceup__modal__metrics-text">
          {/* 8/10 - Unrelenting Rolling Hills */}
          {props?.race?.incline?.score} {props?.race?.incline?.description}
        </p>
      </div>
      <div className="laceup__modal__metrics-segment">
        <img
          className="laceup__race-tile__metrics-icon"
          src={star}
          alt="star icon"
        />
        <p className="laceup__modal__metrics-text">
          {props?.race?.overall?.score} {props?.race?.overall?.description}
        </p>
      </div>
    </div>
  );
};
export default LaceUpModalMetrics;

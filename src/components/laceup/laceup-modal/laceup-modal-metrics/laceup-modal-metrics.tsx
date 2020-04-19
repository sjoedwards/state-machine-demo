import React from 'react';
import star from '../../../../star.svg';
import incline from '../../../../incline.svg';
import distance from '../../../../distance.svg';
import  {Race } from '../../../../interfaces'

interface LaceUpModalMetricsProps {
  race: Race
}

const LaceUpModalMetrics = ({race}: LaceUpModalMetricsProps) => {
  return (
    <div className="laceup__modal__metrics-container">
      <p className="laceup__modal__title">{race?.title}</p>
      <div className="laceup__modal__metrics-segment">
        <img
          className="laceup__race-tile__metrics-icon"
          src={distance}
          alt="distance icon"
        />
        <p className="laceup__modal__metrics-text">{race?.distance?.short}, {race?.distance?.long}</p>
      </div>
      <div className="laceup__modal__metrics-segment">
        <img
          className="laceup__race-tile__metrics-icon"
          src={incline}
          alt="incline icon"
        />
        <p className="laceup__modal__metrics-text">
          {race?.incline?.score}, {race?.incline?.description}
        </p>
      </div>
      <div className="laceup__modal__metrics-segment">
        <img
          className="laceup__race-tile__metrics-icon"
          src={star}
          alt="star icon"
        />
        <p className="laceup__modal__metrics-text">
          {race?.overall?.score}, {race?.overall?.description}
        </p>
      </div>
    </div>
  );
};
export default LaceUpModalMetrics;

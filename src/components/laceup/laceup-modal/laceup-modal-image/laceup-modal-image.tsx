import React from 'react';
import {Race} from '../../../../interfaces'

const LaceUpModalImage = ({race}: {race: Race}) => {
  const img = race?.image || `https://via.placeholder.com/150`

  const customUrl = {
    backgroundImage: `url(${img})`
  }
  return (
    <div className="laceup__modal__image" style={customUrl}></div>
  );
};

export default LaceUpModalImage;

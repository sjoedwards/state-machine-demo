import React from 'react';
import { Race } from '../../../../interfaces'

const LaceUpRaceTileImage = (props: { race: Race }) => {
  const img = props?.race?.image || `https://via.placeholder.com/150`

  const customUrl = {
    backgroundImage: `url(${img})`
  }
  return (
    <div className="laceup__race-tile__image" style={customUrl}></div>
  );
}

export default LaceUpRaceTileImage;
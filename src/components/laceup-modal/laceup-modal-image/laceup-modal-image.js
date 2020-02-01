import React from 'react';

const LaceUpModalImage = (props) => {
  const img = props?.race?.image || `https://via.placeholder.com/150`

  const customUrl = {
    backgroundImage: `url(${img})`
  }
  return (
    <div className="laceup__modal__image" style={customUrl}></div>
  );
};

export default LaceUpModalImage;

import React from 'react';

const LaceUpModalImage = (props) => {
  const img = props.src || `https://via.placeholder.com/150`

  const customUrl = {
    backgroundImage: `url(${img})` || `url(https://via.placeholder.com/150)`
  }
  return (
    <div className="laceup__modal__image" style={customUrl}></div>
  );
};

export default LaceUpModalImage;

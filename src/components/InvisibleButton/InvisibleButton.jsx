import React from 'react';
import './InvisibleButton.css';

const InvisibleButton = ({link}) => {
  return (
    <a href={link} className='invisible__btn'></a>
  )
}

export default InvisibleButton;
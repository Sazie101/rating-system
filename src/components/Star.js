import React from 'react';
import { FaStar } from 'react-icons/fa';

const Star = ({ filled, onClick }) => {
  return (
    <span className='stars'>
        <FaStar
          color={filled ? '#ffd700' : '#808080'}
          onClick={onClick}
          style={{ cursor: 'pointer', fontSize: '5rem' }}
        />
    </span>
  );
};

export default Star;
import React from 'react';

const BotoneraNivel = ({ item, onSelect }) => {
  return (
      <button onClick={() => onSelect(item)} className='btn btn-outline-secondary me-2' style={{ textTransform: 'capitalize' }}>
          {item.nivel}
      </button>
  );
}

export default BotoneraNivel;
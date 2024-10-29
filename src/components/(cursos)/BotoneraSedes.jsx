import React from 'react';
import { Link } from 'react-router-dom';

const BotoneraSedes = ({ item, onSelect }) => {
  return (
      <Link to={`/cursos/${item.nombre}/${item.id}`} onClick={() => onSelect(item)} className='btn btn-outline-primary me-2' style={{ textTransform: 'capitalize' }}>
          {item.nombre}
      </Link>
  );
}

export default BotoneraSedes;
import React from 'react';
import { Link } from 'react-router-dom';

const BotoneraCursos = ({ item }) => {
  return (
      <Link to={`/detalle/${item.id}`}  className='btn btn-outline-primary me-2' style={{ textTransform: 'capitalize' }}>
          {item.curso}
      </Link>
  );
}

export default BotoneraCursos; // Asegúrate de que esta línea esté presente
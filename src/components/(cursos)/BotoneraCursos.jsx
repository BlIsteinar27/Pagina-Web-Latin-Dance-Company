import React from 'react'
import { Link } from 'react-router-dom'


const BotoneraCursos = ({item}) => {
  return (
    <>
        <Link to='' href="#" className='btn btn-outline-primary me-2' style={{ textTransform: 'capitalize' }}>
        {item.curso}
      </Link>
    </>
  )
}

export default BotoneraCursos
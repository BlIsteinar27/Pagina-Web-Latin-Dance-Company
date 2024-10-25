import React from 'react'
import { Link } from 'react-router-dom'


const BotoneraSedes = ({item}) => {
  return (
    <>
        <Link to='' href="#" className='btn btn-outline-primary me-2' style={{ textTransform: 'capitalize' }}>
        {item.nombre}
      </Link>
    </>
  )
}

export default BotoneraSedes
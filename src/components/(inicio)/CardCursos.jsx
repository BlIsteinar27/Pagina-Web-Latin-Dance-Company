import React from 'react'
import { Link } from 'react-router-dom'

const CardCursos = ({ item }) => {
    return (
        <>
            <div className="col-md-5 col-lg-3 mb-4" >
                <div className="card h-100">
                    <a href="index.html"><img src={`/images/${item.id}.jpg`} className="card-img-top" alt={item.curso} /></a>
                    <div className="card-body p-0">
                        <a href="index.html">
                            <h5 className="card-title pt-4">Cursos {item.curso}</h5>
                        </a>
                        <p className="card-text">{item.descripcion}</p>
                    </div>
                    <div className='card-footer'>
                        <div className="card-text">
                            <ul className="d-flex">
                                <li className="residence-list"> <Link to={`/cursos/${item.id}`} href="#" className='btn btn-outline-primary'>Mas info</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardCursos
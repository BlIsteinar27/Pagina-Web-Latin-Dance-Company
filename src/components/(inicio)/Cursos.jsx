import React from 'react'
import { Link } from 'react-router-dom'

const Cursos = () => {
    return (
        <>
            <div className='container my-4 py-4'>
                <h1 className='text-center m-0 py-lg-5'>Cursos Disponibles</h1>
                <div className='container'>
                    <div className='row'>
                        <div className="col-md-5 col-lg-3 mb-4" >
                            <div className="card h-100">
                                <a href="index.html"><img src="images/curso salsa.jpg" className="card-img-top" alt="image" /></a>
                                <div className="card-body p-0">
                                    <a href="index.html">
                                        <h5 className="card-title pt-4">Cursos Salsa</h5>
                                    </a>
                                    <p className="card-text">Descubre el ritmo y la pasión de la salsa en línea con nuestras clases diseñadas para todos los niveles. Este curso, inspirado en el estilo de Nueva York.</p>
                                </div>
                                <div className='card-footer'>
                                    <div className="card-text">
                                        <ul className="d-flex">
                                            <li className="residence-list"> <Link to="/cursos" href="#" className='btn btn-outline-primary'>Mas info</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-3 mb-4" >
                            <div className="card h-100">
                                <a href="index.html"><img src="images/curso bachata.jpg" className="card-img-top" alt="image" /></a>
                                <div className="card-body p-0">
                                    <a href="index.html">
                                        <h5 className="card-title pt-4">Cursos Bachata</h5>
                                    </a>
                                    <p className="card-text">Sumérgete en el ritmo y sensualidad de la bachata, con este estilo vibrante y contemporáneo combina movimientos sensuales y dinámicos.</p>
                                </div>
                                <div className="card-footer">
                                    <div className="card-text">
                                        <ul className="d-flex">
                                            <li className="residence-list"> <a href="#" className='btn btn-outline-primary'>Mas info</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-3 mb-4" >
                            <div className="card h-100">
                                <a href="index.html"><img src="images/curso casino.jpg" className="card-img-top" alt="image" /></a>
                                <div className="card-body p-0">
                                    <a href="index.html">
                                        <h5 className="card-title pt-4">Cursos Casino</h5>
                                    </a>
                                    <p className="card-text">Déjate llevar por el ritmo contagioso de la salsa casino, un baile que captura la esencia de la cultura cubana y te invita a moverte con pasión y alegría.</p>
                                </div>
                                <div className="card-footer">
                                    <div className="card-text">
                                        <ul className="d-flex">
                                            <li className="residence-list"> <a href="#" className='btn btn-outline-primary'>Mas info</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3 mb-4" >
                            <div className="card h-100 ">
                                <a href="index.html"><img src="images/curso kizomba.jpg" className="card-img-top" alt="image" /></a>
                                <div className="card-body p-0">
                                    <a href="index.html">
                                        <h5 className="card-title pt-4">Cursos Kizomba</h5>
                                    </a>
                                    <p className="card-text">Déjate envolver por la sensualidad y el ritmo cautivador de la Kizomba,este estilo, que combina movimientos suaves y fluidos, se caracteriza por su conexión íntima entre los bailarines.</p>
                                </div>
                                <div className='card-footer'>
                                    <div className="card-text">
                                        <ul className="d-flex">
                                            <a href="#" className='btn btn-outline-primary'>Mas info</a>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cursos
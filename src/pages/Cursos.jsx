import React from 'react'

const Cursos = () => {
    return (
        <>
            <div className='container mt-5 pt-5'>
                    <h3 className='text-center'>Otros generos a explorar</h3> <br />
                <div className='d-flex justify-content-center align-items-center mb-3'>
                    <a href="#" className='btn btn-primary me-2'>Salsa</a>
                    <a href="#" className='btn btn-primary me-2'>Bachata</a>
                    <a href="#" className='btn btn-primary me-2'>Casino</a>
                    <a href="#" className='btn btn-primary me-2'>Kizomba</a>
                </div>
                <h2 className='text-center mt-1 mb-3'>Cursos de Salsa</h2>
                <div className='row'>
                    <div className="col-md-5 col-lg-3 mb-4" >
                        <div className="card h-100">
                            <a href="index.html"><img src="images/curso salsa.jpg" className="card-img-top" alt="image" /></a>
                            <div className="card-body p-0">
                                <a href="index.html">
                                    <h5 className="card-title pt-4">Cursos Salsa</h5>
                                </a>
                                <p className="card-text">Basico</p>
                                <div className="card-text">
                                    <ul className="d-flex">
                                        <li className="residence-list"> <i className="bi bi-calendar"></i>Dia: Sabado</li>
                                        <li className="residence-list"> <i className="bi bi-clock"></i> 12:00 AM</li>
                                        <li className="residence-list"> <i className="bi bi-geo-alt"></i>Sede: Naguanagua</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 col-lg-3 mb-4" >
                        <div className="card h-100">
                            <a href="index.html"><img src="images/curso salsa.jpg" className="card-img-top" alt="image" /></a>
                            <div className="card-body p-0">
                                <a href="index.html">
                                    <h5 className="card-title pt-4">Cursos Salsa</h5>
                                </a>
                                <p className="card-text">Intermedio</p>
                                <div className="card-text">
                                    <ul className="d-flex">
                                        <li className="residence-list"> <i className="bi bi-calendar"></i>Dia: Sabado</li>
                                        <li className="residence-list"> <i className="bi bi-clock"></i> 01:00 PM</li>
                                        <li className="residence-list"> <i className="bi bi-geo-alt"></i>Sede: Naguanagua</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 col-lg-3 mb-4" >
                        <div className="card h-100">
                            <a href="index.html"><img src="images/curso salsa.jpg" className="card-img-top" alt="image" /></a>
                            <div className="card-body p-0">
                                <a href="index.html">
                                    <h5 className="card-title pt-4">Cursos Salsa</h5>
                                </a>
                                <p className="card-text">Avanzado</p>
                                <div className="card-text">
                                    <ul className="d-flex">
                                        <li className="residence-list"> <i className="bi bi-calendar"></i>Dia: Domingo</li>
                                        <li className="residence-list"> <i className="bi bi-clock"></i> 09:00 AM</li>
                                        <li className="residence-list"> <i className="bi bi-geo-alt"></i>Sede: Naguanagua</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 col-lg-3 mb-4" >
                        <div className="card h-100">
                            <a href="index.html"><img src="images/curso salsa.jpg" className="card-img-top" alt="image" /></a>
                            <div className="card-body p-0">
                                <a href="index.html">
                                    <h5 className="card-title pt-4">Cursos Salsa</h5>
                                </a>
                                <p className="card-text">Basico</p>
                                <div className="card-text">
                                    <ul className="d-flex">
                                        <li className="residence-list"> <i className="bi bi-calendar"></i>Dia: Domingo</li>
                                        <li className="residence-list"> <i className="bi bi-clock"></i> 11:00 AM</li>
                                        <li className="residence-list"> <i className="bi bi-geo-alt"></i>Sede: Naguanagua</li>
                                    </ul>
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
import React from 'react'

const CardCur = ({item}) => {
  return (
    <>
        <div className="col-md-5 col-lg-3 mb-4" >
                <div className="card h-100">
                    <a href="index.html"><img src="images/curso salsa.jpg" className="card-img-top" alt="image" /></a>
                    <div className="card-body p-0">
                        <a href="index.html">
                            <h5 className="card-title pt-4">Cursos {item.curso}</h5>
                        </a>
                        <p className="card-text">Basico</p>
                        <div className="card-text">
                            <ul className="d-flex">
                                <li className="residence-list"> <i class="bi bi-calendar"></i>Dia: Sabado</li>
                                <li className="residence-list"> <i class="bi bi-clock"></i>Hora: 12:00 AM</li>
                                <li className="residence-list"> <i class="bi bi-geo-alt"></i>Sede: Naguanagua</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default CardCur
import React from 'react';

const CardCur = ({ item }) => {
  return (
      <div className="col-md-5 col-lg-3 mb-4">
          <div className="card h-100">
              <a href="#"><img src={`images/${item.idcurso}.jpg`} className="card-img-top" alt={`${item.curso}`} /></a>
              <div className="card-body p-0">
                  <h5 className="card-title pt-4">Cursos {item.curso}</h5>
                  <p className="card-text">{item.nivel}</p>
                  <div className="card-text">
                      <ul className="d-flex">
                          <li className="residence-list"><i className="bi bi-calendar"></i> Día: Sábado</li>
                          <li className="residence-list"><i className="bi bi-clock"></i> {item.horario}</li>
                          <li className="residence-list"><i className="bi bi-geo-alt"></i> {item.sede}</li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default CardCur;
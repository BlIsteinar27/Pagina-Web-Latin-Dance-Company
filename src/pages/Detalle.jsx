import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BotoneraCursos from '../components/(detalle)/BotoneraCursos'

const API = "http://localhost/latin%20dance/api/cursos/getCursoporid.php?id="
const API2 = "http://localhost/latin%20dance/api/cursos/getCursos.php"
const API3 = "http://localhost/latin%20dance/api/cursos/getDetallecursoporid.php?id="
const API4 = "http://localhost/latin%20dance/api/cursos/getEstructuraporid.php?id="

const Detalle = () => {
  const params = useParams()
  const navigate = useNavigate()
  const [curso, setCurso] = useState({})
  const [cursos, setCursos] = useState([])
  const [detalle, setDetalle] = useState([])
  const [estructura, setEstructura] = useState([])

  let URI = API + params.id
  let URI2 = API3 + params.id
  let URI3 = API4 + params.id

  const getCurso = async () => {
    try {
      const response = await fetch(URI);
      const data = await response.json();
      //console.log(data[0].curso)
      setCurso(data[0]);
    } catch (error) {
      console.error(error)
    }
  };

  const getCursos = async () => {
    try {
      const response = await fetch(API2);
      const data = await response.json();
      //console.log(data)
      setCursos(data);
    } catch (error) {
      console.error(error)
    }
  };

  const getDetalle = async () => {
    try {
      const response = await fetch(URI2);
      const data = await response.json();
      //console.log(data[0].curso)
      setDetalle(data);
    } catch (error) {
      console.error(error)
    }
  };

  const getEstructura = async () => {
    try {
      const response = await fetch(URI3);
      const data = await response.json();
      console.log(data)
      setEstructura(data);
    } catch (error) {
      console.error(error)
    }
  };
  
  useEffect(() => {
    getCursos();
  }, []);

  useEffect(() => {
    getCurso();
    getDetalle();
    getEstructura();
  }, [params.id]);
  return (
    <>
      <div className='container mt-5 pt-5'>
        <div className='d-flex justify-content-center align-items-center my-5'>

          <div className='pt-2'>
            {cursos && cursos.map((item) => (
              <BotoneraCursos key={item.id} item={item} />
            ))}
          </div>
        </div>
        
        <div className='row'>
          <div className="col-md-4 ">
            <img src='/public/images/1.jpg' alt="" className="img-fluid img-thumbnail" />
          </div>
          <div className='col-md-8'>
            <h2><b>Curso de {curso.curso}</b></h2>
            <h3 className='text-white-50'>{curso.descripcion}</h3><br />
            <hr />
            <p>
              <b>:</b> {estructura.curso}<br />
              <b>Pais de origen:</b> {}
            </p>
            <hr />
            <a href="#" className="btn btn-light btn-sm me-2" onClick={() => navigate(-1)}>
              Volver
            </a>

            <hr />
          </div>

        </div>

      </div>
    </>
  )
}

export default Detalle
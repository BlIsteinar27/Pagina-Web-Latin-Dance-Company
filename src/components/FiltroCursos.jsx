import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const API = 'http://localhost/latin%20dance/api/cursos/getCursos.php.'

const FiltroCursos = () => {
    const [datos, setDatos] = useState([])
    const getDatos = async () => {
        try {
            const response = await fetch(API);
            const data = await response.json();
            //console.log(data)
            setDatos(data);
        } catch (error) {
            console.error(error)
        }
    };
    useEffect(() => {
        getDatos();
    }, []);

  return (
    <>
        {datos && datos.map((item, index) => (
                <li key={index}><Link to={`/cursos/${item.id}`} className="dropdown-item" href="#">{item.curso}</Link></li>
            ))}
    </>
  )
}

export default FiltroCursos
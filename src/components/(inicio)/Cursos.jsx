import React, { useEffect, useState } from 'react'

import CardCursos from './CardCursos';

const API = "http://localhost/latin%20dance/api/cursos/getCursos.php."
const API2 = "http://localhost/latin%20dance/api/sedes/getSedes.php"

const Cursos = () => {
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
            <div className='container my-4 py-4'>
                <h1 className='text-center m-0 py-lg-5'>Cursos Disponibles</h1>
                <div className='container'>
                    <div className='row'>
                        {datos && datos.map((item) => (
                            <CardCursos key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cursos
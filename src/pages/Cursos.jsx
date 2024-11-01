import { useEffect, useState } from "react";
import BotoneraSedes from "../components/(cursos)/BotoneraSedes";
import BotoneraCursos from "../components/(cursos)/BotoneraCursos";
import CardCur from "../components/(cursos)/CardCur";
import { useParams } from "react-router-dom";
import BotoneraNivel from "../components/(cursos)/BotoneraNivel";

const API = "http://localhost/latin%20dance/api/sedes/getSedes.php";
const API2 = "http://localhost/latin%20dance/api/cursos/getCursoporsede.php?id=";

const Cursos = () => {
    const params = useParams();
    const id = params.id; // Obtener el ID desde los parámetros
    const nombre = params.nombre;

    const [cursos, setCursos] = useState([]);
    const [sedes, setSedes] = useState([]);
    const [niveles, setNiveles] = useState([]);
    const [selectedSede, setSelectedSede] = useState(null); // Estado para la sede seleccionada
    const [selectedCurso, setSelectedCurso] = useState(null); // Estado para el curso seleccionado
    const [selectedNivel, setSelectedNivel] = useState(null); // Estado para el nivel seleccionado

    const getCursosPorSede = async (sedeId) => {
        try {
            const response = await fetch(`${API2}${sedeId}`);
            const data = await response.json();
            if (Array.isArray(data)) {
                setCursos(data); // Actualiza los cursos según la sede seleccionada
            } else {
                console.error('La respuesta no es un array:', data);
                setCursos([]); // Manejar el error como prefieras
            }
        } catch (error) {
            console.error(error);
        }
    };

    const getSedes = async () => {
        try {
            const response = await fetch(API);
            const data = await response.json();
            setSedes(data);
        } catch (error) {
            console.error(error);
        }
    };

    // Nueva función para obtener niveles por curso
    const getNivelesPorCurso = async (cursoId) => {
        try {
            const response = await fetch(`http://localhost/latin%20dance/api/cursos/getEstructuraporid.php?id=${cursoId}`);
            const data = await response.json();
            if (Array.isArray(data)) {
                const nivelesDisponibles = data.map(item => ({ id: item.nivel, nivel: item.nivel }));
                setNiveles(nivelesDisponibles); // Actualiza los niveles según el curso seleccionado
            } else {
                console.error('La respuesta no es un array:', data);
                setNiveles([]); // Manejar el error como prefieras
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getSedes(); // Obtener sedes al cargar el componente
    }, []);

    // Manejar la selección de sede
    const handleSelectSede = (sede) => {
        setSelectedSede(sede); // Actualiza la sede seleccionada
        getCursosPorSede(sede.id); // Llama a la API para obtener los cursos de esta sede
        setSelectedCurso(null); // Reinicia la selección del curso al cambiar de sede
        setNiveles([]); // Reinicia los niveles al cambiar de sede
        setSelectedNivel(null); // Reinicia la selección del nivel al cambiar de sede
    };

    // Manejar la selección de curso
    const handleSelectCurso = (curso) => {
        setSelectedCurso(curso); // Actualiza el curso seleccionado
        getNivelesPorCurso(curso.id); // Llama a la nueva API para obtener los niveles de este curso
        setSelectedNivel(null); // Reinicia la selección del nivel al cambiar de curso
    };

    // Manejar la selección de nivel
    const handleSelectNivel = (nivel) => {
        setSelectedNivel(nivel); // Actualiza el nivel seleccionado
    };

    return (
        <div className='container mt-5 pt-5'>
            <div className='d-flex justify-content-center align-items-center my-5'>
                {sedes && sedes.map((item) => (
                    <BotoneraSedes key={item.id} item={item} onSelect={handleSelectSede} />
                ))}
            </div>

            {selectedSede ? (
                <>
                    <h3 className='text-center mt-1 mb-5'> Sede {selectedSede.nombre} </h3>
                    <h3 className='text-center text-white-50'>Cursos disponibles ({cursos.length})</h3> <br />
                    <div className='d-flex justify-content-center align-items-center mb-3 mt-0'>
                        {cursos && cursos.map((item) => (
                            <BotoneraCursos key={item.id} item={item} sede={selectedSede.nombre} onSelect={handleSelectCurso} />
                        ))}
                    </div>

                    {selectedCurso ? (
                        <>
                            <h3 className='text-center'>Niveles disponibles para {selectedCurso.curso}</h3>
                            <div className='d-flex justify-content-center align-items-center mb-3 mt-0'>
                                {niveles && niveles.map((item, index) => (
                                    <BotoneraNivel key={`${item.nivel}-${index}`} item={item} onSelect={handleSelectNivel} />
                                ))}
                            </div>
                            {/* Solo renderizar los Cards si hay un nivel seleccionado */}
                            {selectedNivel ? (
                                <div className='row'>
                                    <CardCur key={selectedCurso.id} item={selectedCurso} nivel={selectedNivel.nivel} />
                                </div>
                            ) : (
                                <h3 className='text-center'>Por favor, selecciona un nivel para ver los detalles del curso.</h3>
                            )}
                        </>
                    ) : (
                        <h3 className='text-center'>Por favor, selecciona un curso para ver los niveles disponibles.</h3>
                    )}
                </>
            ) : (
                <h3 className='text-center'>Por favor, selecciona una sede para ver los cursos disponibles.</h3>
            )}
        </div>
    );
}

export default Cursos;
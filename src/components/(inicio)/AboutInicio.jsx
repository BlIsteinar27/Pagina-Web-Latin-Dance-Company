import React from 'react'

const AboutInicio = () => {
    return (
        <>
            <section id="billboard">
                <div className="container">
                    <div className="row flex-lg-row-reverse align-items-center">
                        <div className="col-lg-6">
                            <img src="images/Inicio.jpg" className="d-block mx-lg-auto img-fluid" alt="Latin Dance Company" width={700} height={500} loading="lazy" />
                        </div>
                        <div className="col-lg-6">
                            <h1 className="text-capitalize lh-1 my-3">Descubre el ritmo en Latin Dance Company</h1>
                            <p className="lead">En Latin Dance Company, ubicada en Venezuela, transformamos la pasión por el baile en arte. Ofrecemos clases de salsa, bachata y otros estilos para todos los niveles.</p>
                            <nav className="navbar navbar-expand-lg billboard-nav">
                                <div className="container billboard-search p-0">
                                    <div className="row billboard-row">
                                        <div className="col-lg-3 billboard-select">
                                            <select className="form-select mb-1 mb-lg-0" aria-label="Genero">
                                                <option selected>Genero</option>
                                                <option value={1}>Salsa</option>
                                                <option value={2}>Bachata</option>
                                                <option value={3}>Merengue</option>
                                                <option value={4}>Baile de Salón</option>
                                                <option value={5}>Otros</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-3 billboard-select">
                                            <select className="form-select mb-2 mb-lg-0" aria-label="Nivel">
                                                <option selected>Nivel</option>
                                                <option value={1}>Principiante</option>
                                                <option value={2}>Intermedio</option>
                                                <option value={3}>Avanzado</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-3 billboard-select">
                                            <select className="form-select mb-2 mb-lg-0" aria-label="Ubicación">
                                                <option selected>Ubicación</option>
                                                <option value={1}>Naguanagua</option>
                                                <option value={2}>Paraparal</option>
                                                <option value={3}>San Diego</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-3 billboard-btn">
                                            <button type="submit" className="btn btn-primary btn-lg billboard-search">Buscar Cursos</button>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default AboutInicio
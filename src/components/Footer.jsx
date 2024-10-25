import React from 'react'

const Footer = () => {
    return (
        <>
            <section id="footer">
                <div className="container footer-container">
                    <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5  ">
                        <div className=" col-md-8">
                            <h3><img src="/images/logo (2).png" alt="Logo" /></h3>
                            <p>Ofrecemos clases de salsa, bachata y otros estilos para todos los niveles. ¡Únete a nosotros y deja que la música te guíe! Con nosotros aprendes a bailar, te lo aseguramos😎
                            Ven y aprende con especialistas en cada Género.</p>
                            <p>Nuestras redes:</p>
                            <i className="bi-facebook pe-4" />
                            <i className="bi-instagram pe-4" />
                            <i className="bi-whatsapp pe-4" />
                            
                        </div>
                        
                        <div className="col-md-4 ">
                            <h5>Contrataciones</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Bailoterapia <span className="badge bg-danger">Nuevo</span></a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Exhibiciones</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Talleres</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Modulos Intensivos <span className="badge bg-warning">Exclusivo</span></a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Clases Privadas <span className="badge bg-warning">Exclusivo</span></a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Asesorias Coreograficas <span className="badge bg-warning">Exclusivo</span></a></li>
                            </ul>
                        </div>
                       
                    </footer>
                </div>
                <footer className="d-flex flex-wrap justify-content-center align-items-center border-top" />
                <div className="container">
                    <footer className="d-flex flex-wrap justify-content-center align-items-center py-2 ">
                        <div className=" d-flex align-items-center">
                            <p>Desarrollador : Jose Roman || © 2024.</p>
                        </div>
                       
                    </footer>
                </div>
            </section>
        </>
    )
}

export default Footer
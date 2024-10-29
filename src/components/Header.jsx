import React from 'react'
import { Link } from 'react-router-dom'
import FiltroCursos from './FiltroCursos'

const Header = () => {
    return (
        <>
            <header id="nav" className="site-header position-fixed text-white bg-navBar">
                <nav id="navbar-example2" className="navbar navbar-expand-lg py-2">
                    <div className="container ">
                        <Link to='/inicio' className="navbar-brand" href="#"><img src="/images/logo (2).png" alt="Logo" /></Link>
                        <button className="navbar-toggler text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation"><ion-icon name="menu-outline" style={{ fontSize: 30 }} /></button>
                        <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasNavbar2Label">Menu <img src="images/logo (2).png" alt="image" /></h5>
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" />
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav align-items-center justify-content-end align-items-center flex-grow-1 ">
                                    <li className="nav-item">
                                        <Link to='/inicio' className="nav-link active me-md-4" href="#">Inicio</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/cursos' className="nav-link me-md-4" href="#">Cursos</Link>
                                    </li>
                                    <li className="nav-item dropdown ">
                                        <a className="nav-link me-md-4 text-center dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Horarios de</a>
                                        <ul className="dropdown-menu dropdown-menu-dark">
                                            <FiltroCursos/>     
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown ">
                                        <a className="nav-link me-md-4 text-center dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Contrataciones</a>
                                        <ul className="dropdown-menu dropdown-menu-dark">
                                            <li><a href="index.html" className="dropdown-item">Bailoterapia <span className="badge bg-danger">Nuevo</span></a>
                                            </li>
                                            <li><a href="index.html" className="dropdown-item">Exhibiciones </a>
                                            </li>
                                            <li><a href="index.html" className="dropdown-item">Talleres</a>
                                            </li>
                                            <li><a href="index.html" className="dropdown-item">Modulos Intensivos <span className="badge bg-warning">Exclusivo</span></a>
                                            </li>    
                                            <li><a href="index.html" className="dropdown-item">Clases Privadas <span className="badge bg-warning">Exclusivo</span></a>
                                            </li>
                                            <li><a href="index.html" className="dropdown-item">Asesorias Coreograficas <span className="badge bg-warning">Exclusivo</span></a>
                                            </li>
                                            
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link mx-md-4" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">Iniciar Sesion</a>
                                    </li>
                                    {/* Modal */}
                                    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                                </div>
                                                <div className="modal-body">
                                                    <div className="tabs-listing mt-4">
                                                        <nav>
                                                            <div className="nav nav-tabs d-flex justify-content-center border-0" id="nav-tab" role="tablist">
                                                                <button className="btn btn-outline-primary text-uppercase me-3 active" id="nav-sign-in-tab" data-bs-toggle="tab" data-bs-target="#nav-sign-in" type="button" role="tab" aria-controls="nav-sign-in" aria-selected="true">Iniciar sesion</button>
                                                                <button className="btn btn-outline-primary text-uppercase" id="nav-register-tab" data-bs-toggle="tab" data-bs-target="#nav-register" type="button" role="tab" aria-controls="nav-register" aria-selected="false">Registrarse</button>
                                                            </div>
                                                        </nav>
                                                        <div className="tab-content" id="nav-tabContent">
                                                            <div className="tab-pane fade active show" id="nav-sign-in" role="tabpanel" aria-labelledby="nav-sign-in-tab">
                                                                <form id="form1" className="form-group flex-wrap p-3 ">
                                                                    <div className="form-input col-lg-12 my-4">
                                                                        <label htmlFor="exampleInputEmail1" className="form-label fs-6 text-uppercase fw-bold text-black">Email
                                                                            Address</label>
                                                                        <input type="text" id="exampleInputEmail1" name="email" placeholder="Email" className="form-control ps-3" />
                                                                    </div>
                                                                    <div className="form-input col-lg-12 my-4">
                                                                        <label htmlFor="inputPassword1" className="form-label  fs-6 text-uppercase fw-bold text-black">Password</label>
                                                                        <input type="password" id="inputPassword1" placeholder="Password" className="form-control ps-3" aria-describedby="passwordHelpBlock" />
                                                                        <div id="passwordHelpBlock" className="form-text text-center">
                                                                            <a href="#" className=" password">Forgot Password ?</a>
                                                                        </div>
                                                                    </div>
                                                                    <label className="py-3">
                                                                        <input type="checkbox" required className="d-inline" />
                                                                        <span className="label-body text-black">Remember Me</span>
                                                                    </label>
                                                                    <div className="d-grid my-3">
                                                                        <button className="btn btn-primary btn-lg btn-dark text-uppercase btn-rounded-none fs-6">Log
                                                                            In</button>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                            <div className="tab-pane fade" id="nav-register" role="tabpanel" aria-labelledby="nav-register-tab">
                                                                <form id="form2" className="form-group flex-wrap p-3 ">
                                                                    <div className="form-input col-lg-12 my-4">
                                                                        <label htmlFor="exampleInputEmail2" className="form-label fs-6 text-uppercase fw-bold text-black">Email
                                                                            Address</label>
                                                                        <input type="text" id="exampleInputEmail2" name="email" placeholder="Email" className="form-control ps-3" />
                                                                    </div>
                                                                    <div className="form-input col-lg-12 my-4">
                                                                        <label htmlFor="inputPassword2" className="form-label  fs-6 text-uppercase fw-bold text-black">Password</label>
                                                                        <input type="password" id="inputPassword2" placeholder="Password" className="form-control ps-3" aria-describedby="passwordHelpBlock" />
                                                                    </div>
                                                                    <label className="py-3">
                                                                        <input type="checkbox" required className="d-inline" />
                                                                        <span className="label-body text-black">I agree to the <a href="#" className="text-black password border-bottom">Privacy Policy</a>
                                                                        </span>
                                                                    </label>
                                                                    <div className="d-grid my-3">
                                                                        <button className="btn btn-primary btn-lg btn-dark text-uppercase btn-rounded-none fs-6">Registrarse
                                                                        </button>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <li className="nav-item">
                                        <a className="btn-medium btn btn-primary" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal2">Registrarse</a>
                                    </li>
                                    {/* Modal */}
                                    <div className="modal fade" id="exampleModal2" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                                </div>
                                                <div className="modal-body">
                                                    <div className="tabs-listing mt-4">
                                                        <nav>
                                                            <div className="nav nav-tabs d-flex justify-content-center border-0" id="nav-tab2" role="tablist">
                                                                <button className="btn btn-outline-primary text-uppercase me-4 " id="nav-sign-in-tab2" data-bs-toggle="tab" data-bs-target="#nav-sign-in2" type="button" role="tab" aria-controls="nav-sign-in2" aria-selected="false">Iniciar Sesion</button>
                                                                <button className="btn btn-outline-primary text-uppercase active" id="nav-register-tab2" data-bs-toggle="tab" data-bs-target="#nav-register2" type="button" role="tab" aria-controls="nav-register2" aria-selected="true">Registrarse</button>
                                                            </div>
                                                        </nav>
                                                        <div className="tab-content" id="nav-tabContent1">
                                                            <div className="tab-pane fade " id="nav-sign-in2" role="tabpanel" aria-labelledby="nav-sign-in-tab2">
                                                                <form id="form3" className="form-group flex-wrap p-3 ">
                                                                    <div className="form-input col-lg-12 my-4">
                                                                        <label htmlFor="exampleInputEmail3" className="form-label fs-6 text-uppercase fw-bold text-black">Email
                                                                            Address</label>
                                                                        <input type="text" id="exampleInputEmail3" name="email" placeholder="Email" className="form-control ps-3" />
                                                                    </div>
                                                                    <div className="form-input col-lg-12 my-4">
                                                                        <label htmlFor="inputPassword3" className="form-label  fs-6 text-uppercase fw-bold text-black">Password</label>
                                                                        <input type="password" id="inputPassword3" placeholder="Password" className="form-control ps-3" aria-describedby="passwordHelpBlock" />
                                                                        <div id="passwordHelpBlock2" className="form-text text-center">
                                                                            <a href="#" className=" password">Forgot Password ?</a>
                                                                        </div>
                                                                    </div>
                                                                    <label className="py-3">
                                                                        <input type="checkbox" required className="d-inline" />
                                                                        <span className="label-body text-black">Remember Me</span>
                                                                    </label>
                                                                    <div className="d-grid my-3">
                                                                        <button className="btn btn-primary btn-lg btn-dark text-uppercase btn-rounded-none fs-6">Log
                                                                            In</button>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                            <div className="tab-pane fade active show" id="nav-register2" role="tabpanel" aria-labelledby="nav-register-tab2">
                                                                <form id="form4" className="form-group flex-wrap p-3 ">
                                                                    <div className="form-input col-lg-12 my-4">
                                                                        <label htmlFor="exampleInputEmail4" className="form-label fs-6 text-uppercase fw-bold text-black">Email
                                                                            Address</label>
                                                                        <input type="text" id="exampleInputEmail4" name="email" placeholder="Email" className="form-control ps-3" />
                                                                    </div>
                                                                    <div className="form-input col-lg-12 my-4">
                                                                        <label htmlFor="inputPassword4" className="form-label  fs-6 text-uppercase fw-bold text-black">Password</label>
                                                                        <input type="password" id="inputPassword4" placeholder="Password" className="form-control ps-3" aria-describedby="passwordHelpBlock" />
                                                                    </div>
                                                                    <label className="py-3">
                                                                        <input type="checkbox" required className="d-inline" />
                                                                        <span className="label-body text-black">I agree to the <a href="#" className="text-black password border-bottom">Privacy Policy</a>
                                                                        </span>
                                                                    </label>
                                                                    <div className="d-grid my-3">
                                                                        <button className="btn btn-primary btn-lg btn-dark text-uppercase btn-rounded-none fs-6">Sign
                                                                            Up</button>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

        </>
    )
}

export default Header
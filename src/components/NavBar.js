import React from 'react';
import '../assets/css/navbar.css';
import kwLogo from '../assets/Images/kw-logo.png';

function NavBar() {

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className='navbar-brand' href='/'><img src={kwLogo} alt= 'logo' className='logo'/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link text-white" aria-current="page" href="/">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/">Todos los productos</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-white dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorías
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Cocina</a></li>
                                    <li><a className="dropdown-item" href="/">Pastelería</a></li>
                                    <li><a className="dropdown-item" href="/">Electro</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Buscá tu producto..." aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
};

export default NavBar;
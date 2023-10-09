import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ModalFormularioDerivadas } from '../pages/ModalFormularioDerivadas.jsx';
import { ModalFormularioIntegrales } from '../pages/ModalFormularioIntegrales.jsx';

export const NavBarApp = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState(null);

    const handleShowModal = (type) => {
        setModalType(type);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setModalType(null);
        setShowModal(false);
    };

    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <span className="logo">I</span>
                    IntegraFácil
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarNavDropdown" />
            <Navbar.Collapse id="navbarNavDropdown">
                <Nav>
                    <NavDropdown title="Formulario" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={() => handleShowModal('derivadas')}> Para Derivadas</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => handleShowModal('integrales')}>Para Integrales</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Integrales Basicas" id="basic-nav-dropdown">
                        <NavDropdown.Item>
                            <Link to="/Integrales/Basica/teoria" style={{ textDecoration: 'none', color: 'inherit' }}>
                                Basica
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={() => handleShowModal('integrales')}>Intermedio</NavDropdown.Item>
                        <NavDropdown.Item href="#">Avanzado</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Integral por Sustitucion" id="basic-nav-dropdown">
                        <NavDropdown.Item >
                            <Link to="/Integrales/sustitucion/teoria" style={{ textDecoration: 'none', color: 'inherit' }}>Facil</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#">Intermedio</NavDropdown.Item>
                        <NavDropdown.Item href="#">Avanzado</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Integrales Por Partes" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">Facil</NavDropdown.Item>
                        <NavDropdown.Item href="#">Intermedio</NavDropdown.Item>
                        <NavDropdown.Item href="#">Avanzado</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <ModalFormularioDerivadas showModal={showModal && modalType === 'derivadas'} handleCloseModal={handleCloseModal} />
                <ModalFormularioIntegrales showModal={showModal && modalType === 'integrales'} handleCloseModal={handleCloseModal} />
            </Navbar.Collapse>
        </Navbar>
    );
};
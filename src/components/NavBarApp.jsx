import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import {ModalFormularioDerivadas} from '../pages/ModalFormularioDerivadas.jsx';
import {ModalFormularioIntegrales} from '../pages/ModalFormularioIntegrales.jsx';

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

    const sytleLink = {
        textDecoration: 'none',
        color: 'white',
        display: 'inline-block',
        padding: '10px 15px',
        border: '1px solid transparent',
        borderRadius: '4px',
        backgroundColor: 'transparent'
    }

    return (
        <Navbar bg="dark" expand="lg" variant="dark">

            <Navbar.Brand>
                <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>
                    <span className="logo"> IntegraFácil</span>

                </Link>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarNavDropdown"/>
            <Navbar.Collapse id="navbarNavDropdown">

                <Nav>
                    <NavDropdown title="Formulario" id="basic-nav-dropdown" >
                        <NavDropdown.Item onClick={() => handleShowModal('derivadas')}> Para
                            Derivadas</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => handleShowModal('integrales')}>Para
                            Integrales</NavDropdown.Item>
                    </NavDropdown>

                    <Link to="/Integrales/Basica/teoria" style={sytleLink} > Integrales Basicas </Link>
                    <Link to="/Integrales/sustitucion/teoria" style={sytleLink} > Integrales por Sustitucion </Link>
                    <Link to="/Integrales/partes/teoria" style={sytleLink} > Integrales por partes </Link>

                </Nav>

                <ModalFormularioDerivadas showModal={showModal && modalType === 'derivadas'}
                                          handleCloseModal={handleCloseModal}/>
                <ModalFormularioIntegrales showModal={showModal && modalType === 'integrales'}
                                           handleCloseModal={handleCloseModal}/>
            </Navbar.Collapse>
        </Navbar>
    );
};
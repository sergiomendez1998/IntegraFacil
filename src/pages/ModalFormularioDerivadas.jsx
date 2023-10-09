import {Button, Image, Modal} from "react-bootstrap";
import PropTypes from "prop-types";
export const ModalFormularioDerivadas = ({ showModal, handleCloseModal }) => {


    return (
        <div>
            <Modal show={showModal} onHide={handleCloseModal} >
                <Modal.Header closeButton>
                    <Modal.Title>Formulario Derivadas</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src="public/images/formulario-derivadas.png" fluid
                           style={{
                               maxWidth: '100%',
                               height: '100%',
                           }} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

ModalFormularioDerivadas.propTypes = {
    showModal: PropTypes.bool.isRequired,
    handleCloseModal: PropTypes.func.isRequired,

}
import {Button, Image, Modal} from "react-bootstrap";
import PropTypes from "prop-types";
export const ModalFormularioIntegrales = ({ showModal, handleCloseModal }) => {


    return (
        <div>
            <Modal show={showModal} onHide={handleCloseModal} >
                <Modal.Header closeButton>
                    <Modal.Title>Formulario Integrales</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src="public/images/formulario-integral.png" fluid

                           style={{
                               maxWidth: '100%',
                                 height: 'auto'
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

ModalFormularioIntegrales.propTypes = {
    showModal: PropTypes.bool.isRequired,
    handleCloseModal: PropTypes.func.isRequired,

}
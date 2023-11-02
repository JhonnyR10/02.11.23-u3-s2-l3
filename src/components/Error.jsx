import { Modal, Button } from "react-bootstrap";

const Error = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Errore</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>C'è stato un errore nel caricamento dei dati.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Error;

import React from "react";
import { Modal } from "react-bootstrap";
import "./BasicModal.css";

export default function BasicModal(props) {
  const { show, setShow, children } = props;

  return (
    <Modal
      className="basic-modal"
      show={show}
      centered
      size="lg"
      onHide={() => setShow(false)}>
      <Modal.Header></Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
}

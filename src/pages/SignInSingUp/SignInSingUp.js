import React, { useState } from "react";
import "./SignInSingUp.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import Fondo from "../../assets/image/fondo.png.jpg";
import BasicModal from "../../Components/Modal/BasicoModal/BasicModal";
import SignUpForm from "../../Components/SignUpForm/SignUpForm";
import { SignInForm } from "../../Components/SignInForm";

export default function SignInSingUp(props) {
  const { setRefreshCheck } = props;
  const [showModal, setShowModal] = useState(false);
  const [contentModal, setContentModal] = useState(null);

  const openModal = (content) => {
    setShowModal(true);
    setContentModal(content);
  };
  return (
    <>
      <Container fluid className="signin-sign-up">
        <Row>
          <LeftComponent />
          <RightComponent
            openModal={openModal}
            setShowModal={setShowModal}
            setRefreshCheck={setRefreshCheck}
          />
        </Row>
      </Container>
      <BasicModal show={showModal} setShow={setShowModal}>
        {contentModal}
      </BasicModal>
    </>
  );
}

function LeftComponent() {
  return (
    <Col className="signin-sign-up__left" xs={6}>
      <div className="signin-sign-up__background-image">
        <img src={Fondo} alt="Imagen de fondo" />
      </div>
    </Col>
  );
}

function RightComponent(props) {
  const { openModal, setShowModal, setRefreshCheck } = props;
  return (
    <Col className="signin-sign-up__Right" xs={6}>
      <h2>
        Tu plataforma integral para descubrir, compartir y experimentar eventos
        inolvidables en tu comunidad y más allá.
      </h2>
      <h3> ¿Quieres ser parte de nuestra comunidad? ¡Registrate ahora! </h3>
      <div className="signin-sign-up__Right_buttons">
        <Button
          variant="primary"
          onClick={() => openModal(<SignUpForm setShowModal={setShowModal} />)}>
          Registrate{" "}
        </Button>
        <Button
          variant="outline-primary"
          onClick={() =>
            openModal(<SignInForm setRefreshCheck={setRefreshCheck} />)
          }>
          Iniciar sesión
        </Button>
      </div>
    </Col>
  );
}

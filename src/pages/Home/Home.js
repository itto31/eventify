import React from "react";
import BasicLayout from "../../layout/BasicLayout";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";
import Calendario from "../../assets/svg/calendario.svg";
import Evento from "../../assets/svg/eventos.svg";
import Shedule from "../../assets/svg/shedule.svg";

export default function Home(props) {
  const { setRefreshCheck } = props;
  return (
    <BasicLayout ClassName="Home" setRefreshCheck={setRefreshCheck}>
      <Container>
        <div className="mt-5  title">
          <h2>¡Bienvenido a Eventify!</h2>
          <h4>Descubre y Participa en Eventos Locales</h4>
        </div>

        <div className="home_body">
          <div className="home">
            <Row>
              <Col xs={2}>
                <img src={Calendario} alt="imagen" />
              </Col>
              <Col xs={6}>
                <p>
                  "Eventify es una plataforma que te permite explorar una amplia
                  variedad de eventos locales, desde conciertos y festivales
                  hasta conferencias y actividades deportivas. ¡Únete a nosotros
                  y nunca te pierdas un evento emocionante cerca de ti!"
                </p>
              </Col>
            </Row>
          </div>
          <div className="home">
            <Row>
              <Col xs={6}>
                "Nuestra misión es acercarte a eventos locales y ayudarte a
                conectarte con personas que comparten tus intereses. Descubre lo
                que está sucediendo en tu área y crea experiencias
                inolvidables."
              </Col>
              <Col xs={2}>
                <p>
                  <img src={Evento} alt="imagen" />
                </p>
              </Col>
            </Row>
          </div>
          <div className="home">
            <Row>
              <Col xs={3}>
                <img src={Shedule} alt="imagen" />
              </Col>
              <Col xs={6}>
                <p>
                  "Eventify es una plataforma que te permite explorar una amplia
                  variedad de eventos locales, desde conciertos y festivales
                  hasta conferencias y actividades deportivas. ¡Únete a nosotros
                  y nunca te pierdas un evento emocionante cerca de ti!"
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </BasicLayout>
  );
}

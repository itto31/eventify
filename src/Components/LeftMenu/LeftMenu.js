import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  faHome,
  faUser,
  faCalendar,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./LeftMenu.css";
import { logoutApi } from "../../api/auth";
import EventoModal from "../Modal/EventoModal";

export default function LeftMenu(props) {
  const { setRefreshCheck } = props;
  const [showModal, setShowModal] = useState(false);
  const logout = () => {
    logoutApi();
    setRefreshCheck(false);
  };
  return (
    <div className="left-menu">
      <Link to="/">
        <FontAwesomeIcon icon={faHome} /> Inicio
      </Link>
      <Link to="/eventos">
        <FontAwesomeIcon icon={faCalendar} /> Eventos
      </Link>
      <Link to="" onClick={logout}>
        <FontAwesomeIcon icon={faPowerOff} /> Cerrar sesion
      </Link>
      <Button
        onClick={() => {
          setShowModal(true);
        }}>
        Crear Evento
      </Button>
      <EventoModal show={showModal} setShow={setShowModal} />
    </div>
  );
}

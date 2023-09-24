import React, { useEffect, useState } from "react";
import BasicLayout from "../../layout/BasicLayout";
import "./Eventos.css";
import { getEvents, deleteEvent } from "../../api/event";
import { map } from "lodash";
import Swal from "sweetalert2";

export default function Eventos(props) {
  const { setRefreshCheck } = props;
  const [eventos, setEventos] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getEvents();
      setEventos(response || []);
    })();
  }, []);
  const handleEditClick = (eventId) => {};

  const handleDeleteClick = async (eventId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteEvent(eventId);
        if (res.status === 200) {
          Swal.fire("Deleted!", "Evento eliminado", "success");
        }
      }
    });
  };

  return (
    <BasicLayout ClassName="evento" setRefreshCheck={setRefreshCheck}>
      <div className="evento_title mt-5">
        <h2>Eventos</h2>
      </div>
      <ul className="list-group">
        {map(eventos, (evento, index) => {
          return (
            <li className="list-group-item" key={index}>
              <div className="row">
                <div className="col-8">
                  <h5>{evento.title}</h5>
                  <p>{evento.description}</p>
                </div>
                <div className="col-4">
                  <p>Fecha: {evento.date}</p>
                </div>
                <button
                  className="btn btn-outline-primary btn-sm mr-2 btneditar"
                  onClick={() => handleEditClick(evento.eventId)}>
                  Editar
                </button>
                <button
                  className="btn btn-outline-danger btn-sm btneliminar"
                  onClick={() => handleDeleteClick(evento.eventId)}>
                  Eliminar
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </BasicLayout>
  );
}

import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./EventoModal.css";
import Close from "../../../assets/svg/close.svg";
import { addEvent } from "../../../api/event";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default function EventoModal(props) {
  const { show, setShow } = props;

  // Definir el esquema de validación con Yup
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("El nombre del evento es requerido"),
    location: Yup.string().required("La ubicación es requerida"),
    date: Yup.date().required("La fecha es requerida"),
    description: Yup.string().required("La descripción es requerida"),
  });

  // Función que se ejecuta al enviar el formulario
  const onSubmit = async (values, { resetForm }) => {
    const response = await addEvent(values);
    if (response.data) {
      setShow(false);
      Swal.fire({
        icon: "success",
        title: "Evento creado correctamente",
        showConfirmButton: false,
        timer: 1500,
        onClose: () => {
          resetForm(); // Reiniciar el formulario después de un éxito
          window.location.reload();
        },
      });
    }
  };

  // Configuración de Formik
  const formik = useFormik({
    initialValues: {
      title: "",
      location: "",
      date: "",
      description: "",
    },
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  return (
    <Modal
      className="event-modal"
      show={show}
      onHide={() => setShow(false)}
      centered
      size="lg">
      <Modal.Header>
        <Modal.Title>Crear Evento</Modal.Title>
        <img
          src={Close}
          className="exit"
          alt="close"
          onClick={() => setShow(false)}
        />
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group>
            <Form.Control
              type="text"
              name="title"
              placeholder="Nombre del evento"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
            />
            {formik.touched.title && formik.errors.title ? (
              <div className="error-message">{formik.errors.title}</div>
            ) : null}
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              name="location"
              placeholder="Lugar"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.location}
            />
            {formik.touched.location && formik.errors.location ? (
              <div className="error-message">{formik.errors.location}</div>
            ) : null}
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="date"
              name="date"
              placeholder="Fecha"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.date}
            />
            {formik.touched.date && formik.errors.date ? (
              <div className="error-message">{formik.errors.date}</div>
            ) : null}
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="textarea"
              rows="3"
              name="description"
              placeholder="Descripcion"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
            />
            {formik.touched.description && formik.errors.description ? (
              <div className="error-message">{formik.errors.description}</div>
            ) : null}
          </Form.Group>
          <Button variant="primary" type="submit" className="buttonEvent">
            Crear Evento
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

import React, { useState } from "react";
import "./SignUpForm.css";
import { Button, Form, Row, Col, Spinner } from "react-bootstrap";
import { Formik, Field, ErrorMessage, Form as FormikForm } from "formik";
import * as Yup from "yup";
import { signUpApi } from "../../api/auth";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default function SignUpForm(props) {
  const { setShowModal } = props;
  const [loading, setLoading] = useState(false);
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("El nombre es requerido"),
    username: Yup.string().required("El nombre de usuario es requerido"),
    email: Yup.string()
      .email("Ingresa una dirección de correo válida")
      .required("El correo electrónico es requerido"),
    password: Yup.string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .required("La contraseña es requerida"),
    repeatPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden")
      .required("Debes confirmar tu contraseña"),
  });

  const initialFormValues = {
    name: "",
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  };

  const onSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      setSubmitting(true);
      const response = await signUpApi(values);
      if (response.status === 201) {
        setShowModal(false);
        Swal.fire({
          icon: "success",
          title: "Usuario creado correctamente",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      const { data } = error.response;
      Swal.fire({
        icon: "error",
        title: data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    } finally {
      setSubmitting(false);
      setLoading(false);
    }
  };

  return (
    <div className="sign-up-form">
      <h2>Crea tu cuenta</h2>
      <Formik
        initialValues={initialFormValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}>
        {({ isSubmitting }) => (
          <FormikForm>
            <Form.Group>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Nombre"
                className="form-control"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="error-message"
              />
            </Form.Group>

            <Form.Group>
              <Field
                type="text"
                id="username"
                name="username"
                placeholder="Nombre de Usuario"
                className="form-control"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="error-message"
              />
            </Form.Group>

            <Form.Group>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Correo Electrónico"
                className="form-control"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </Form.Group>

            <Row>
              <Col>
                <Form.Group>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Contraseña"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error-message"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Field
                    type="password"
                    id="repeatPassword"
                    name="repeatPassword"
                    placeholder="Confirmar Contraseña"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="repeatPassword"
                    component="div"
                    className="error-message"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Button variant="primary" type="submit" disabled={isSubmitting}>
              {!loading ? "Registrarse" : <Spinner animation="border" />}
            </Button>
          </FormikForm>
        )}
      </Formik>
    </div>
  );
}

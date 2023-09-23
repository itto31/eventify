import React, { useState } from "react";
import "./SignInForm.css";
import { Button, Form, Spinner } from "react-bootstrap";
import { Formik, Field, ErrorMessage, Form as FormikForm } from "formik";
import * as Yup from "yup";
import { signInApi } from "../../api/auth";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default function SignInForm(props) {
  console.log(props);
  const { setRefreshCheck } = props;
  const [loading, setLoading] = useState(false);
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Ingresa una dirección de correo válida")
      .required("El correo electrónico es requerido"),
    password: Yup.string().required("La contraseña es requerida"),
  });

  const initialFormValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      setSubmitting(true);
      const response = await signInApi(values);
      if (response.status === 201) {
        const { access_token } = response.data;
        localStorage.setItem("access_token", access_token);
        setRefreshCheck(false);
        Swal.fire({
          icon: "success",
          title: "Inicio de sesión exitoso",
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
    <div className="sign-in-form p-5">
      <h2 className="mb-5">Iniciar Sesión</h2>
      <Formik
        initialValues={initialFormValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}>
        {({ isSubmitting }) => (
          <FormikForm>
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

            <Button variant="primary" type="submit" disabled={isSubmitting}>
              {!loading ? "Iniciar Sesión" : <Spinner animation="border" />}
            </Button>
          </FormikForm>
        )}
      </Formik>
    </div>
  );
}

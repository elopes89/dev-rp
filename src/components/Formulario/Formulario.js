// import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";

import { ErrorMessage, Field, Form, Formik } from "formik";

import * as Yup from "yup";

import "./FormularioCss.css";

export const Formulario = () => {
  const navigate = useNavigate();

  function Alertar() {
    alert("LOGIN EFETUADO COM SUCESSO");
  }

  const schema = Yup.object().shape({
    nome: Yup.string().required("Campo obrigatório"),
    email: Yup.string().required("Campo obrigatório").email("E-mail inválido"),
  });

  const initialValues = {
    nome: "",
    email: "",
  };

  return (
    <>
      <h1>Login</h1>

      <Formik
        initialValues={initialValues}
        // onSubmit={handleSubmit}
        validationSchema={schema}
        validateOnMount
      >
        {({ isSubmitting, resetForm, isValid }) => (
          <Form>
            <div className="Form">
              <label>E-mail</label>
              <Field name="email"  />
              <ErrorMessage
                name="email"
                style={{ color: "red" }}
                component="span"
              />

              <label>Senha</label>
              <Field name="nome" type="password"/>
              <ErrorMessage
                name="nome"
                style={{ color: "red" }}
                component="span"
              />
            </div>
            <div className="Btn">
              <br></br>
              <button
                type="submit"
                disabled={isSubmitting || !isValid}
                onClick={() => navigate("E")}
              >
                Enviar
              </button>

              {/* <button type="button" disabled={isSubmitting} onClick={resetForm}>
                Limpar
              </button> */}
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

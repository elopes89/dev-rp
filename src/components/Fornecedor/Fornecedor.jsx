import { ErrorMessage, Field, Form, Formik } from "formik";

import { useNavigate } from "react-router-dom";

import * as Yup from "yup";

import "./FornecedorCss.css";

export const Fornecedor = () => {
  const navigate = useNavigate();

  const schema = Yup.object().shape({
    razao: Yup.string().required("Campo obrigatório"),
    nome: Yup.string().required("Campo obrigatório"),
    cnpj: Yup.string().required("Campo obrigatório"),
    email: Yup.string().required("Campo obrigatório").email("E-mail inválido"),
    ramo: Yup.string().required("Campo obrigatório"),
  });

  const initialValues = {
    razao: "",
    nome: "",
    cnpj: "",
    email: "",
    ramo: "",
  };
  function Alertar() {
    alert("fORNECEDOR REGISTRADO");
  }

  return (
    <>
      <h1>NOVO FORNECEDOR</h1>
      <button onClick={() => navigate(-1)}>VOLTAR</button> <br></br>
      <br />
      <Formik
        initialValues={initialValues}
        // onSubmit={handleSubmit}
        validationSchema={schema}
        validateOnMount
      >
        {({ isSubmitting, resetForm, isValid }) => (
          <Form>
            <div className="Form">
              <label>Razão Social</label>
              <Field name="razao" />
              <ErrorMessage
                name="razao"
                style={{ color: "red" }}
                component="span"
              />

              <label>Nome Fantasia</label>
              <Field name="nome" />
              <ErrorMessage
                name="nome"
                style={{ color: "red" }}
                component="span"
              />

              <label>Cnpj</label>
              <Field name="cnpj" />
              <ErrorMessage
                name="cnpj"
                style={{ color: "red" }}
                component="span"
              />

              <label>Email</label>
              <Field name="email" />
              <ErrorMessage
                name="email"
                style={{ color: "red" }}
                component="span"
              />

              <label>Ramo de Atuação</label>
              <Field name="ramo" />
              <ErrorMessage
                name="ramo"
                style={{ color: "red" }}
                component="span"
              />
            </div>
            <div className="Btn">
              <br></br>
              <button
                type="submit"
                disabled={isSubmitting || !isValid}
                onClick={Alertar}
              >
                Salvar
              </button>

              <button type="button" disabled={isSubmitting} onClick={resetForm}>
                Limpar
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

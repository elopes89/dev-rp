import { ErrorMessage, Field, Form, Formik } from "formik";

import { useNavigate } from "react-router-dom";

import * as Yup from "yup";

import "./ProdutoCss.css";

export const Produto = () => {
  const navigate = useNavigate();

  
  const schema = Yup.object().shape({
    nome: Yup.string().required("Campo obrigatório"),
    custo: Yup.string().required("Campo obrigatório"),
    descricao: Yup.string().required("Campo obrigatório"),
    fornecedor: Yup.string().required("Campo obrigatório"),
    grupo: Yup.string().required("Campo obrigatório"),
  });
  
  const initialValues = {
    nome: "",
    custo: "",
    descricao: "",
    fornecedor: "",
    grupo: "",
  };
  function Alertar() {
    alert("PRODUTO CADASTRADO"+initialValues.nome)
  }
  
  return (
    <>
      <h1>NOVO PRODUTO</h1>
      <button onClick={() => navigate(-1)}>VOLTAR</button> <br></br><br />

      <Formik
        initialValues={initialValues}
        // onSubmit={handleSubmit}
        validationSchema={schema}
        validateOnMount
      >
        {({ isSubmitting, resetForm, isValid }) => (
          <Form>
            <div className="Form">
              <label>Nome</label>
              <Field name="nome" />
              <ErrorMessage
                name="nome"
                style={{ color: "red" }}
                component="span"
              />

              <label>Custo</label>
              <Field name="custo" />
              <ErrorMessage
                name="custo"
                style={{ color: "red" }}
                component="span"
              />

              <label>Descrição</label>
              <Field name="descricao" />
              <ErrorMessage
                name="descricao"
                style={{ color: "red" }}
                component="span"
              />

              <label>Fornecedor</label>
              <Field name="fornecedor" />
              <ErrorMessage
                name="fornecedor"
                style={{ color: "red" }}
                component="span"
              />

              <label>Grupo</label>
              <Field name="grupo" />
              <ErrorMessage
                name="grupo"
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

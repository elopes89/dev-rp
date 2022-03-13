import { useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";

import { ErrorMessage, Field, Form, Formik } from "formik";

import * as Yup from "yup";

import "./EmpresaCss.css";

export const Empresa = () => {
  const navigate = useNavigate();

  const schema = Yup.object().shape({
    razao: Yup.string().required("Campo obrigatório"),
    fantasia: Yup.string().required("Campo obrigatório"),
    cnpj: Yup.string().required("Campo obrigatório"),
    email: Yup.string().required("Campo obrigatório").email("E-mail inválido"),
    cep: Yup.string().required("Campo obrigatório"),
    endereco: Yup.string().required("Campo obrigatório"),
    numero: Yup.string().required("Campo obrigatório"),
    bairro: Yup.string().required("Campo obrigatório"),
    cidade: Yup.string().required("Campo obrigatório"),
    latitude: Yup.string().required("Campo obrigatório"),
    longitude: Yup.string().required("Campo obrigatório"),
  });

  const initialValues = {
    razao: "",
    fantasia: "",
    cnpj: "",
    email: "",
    cep: "",
    endereco: "",
    numero: "",
    bairro: "",
    cidade: "",
    latitude: "",
    longitude: "",
  };

  function Alertar() {
    alert("EMPRESA SALVA")
  }



  return (
    <> <br />
    <h2>SGI</h2>
      <button onClick={() => navigate("P")}>PRODUTO</button>
      <button onClick={() => navigate("F")}>FORNECEDOR</button>
      <button onClick={() => navigate("M")}>MAPA</button>
      <button onClick={()=> navigate("/")}>SAIR</button> <br></br>
      
      <h1>NOVA EMPRESA</h1> <br></br>


      <Formik
        initialValues={initialValues}
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
              <Field name="fantasia" />
              <ErrorMessage
                name="fantasia"
                style={{ color: "red" }}
                component="span"
              />

              <label>CNPJ</label>
              <Field name="cnpj" />
              <ErrorMessage
                name="cnpj"
                style={{ color: "red" }}
                component="span"
              />

              <label>E-mail</label>
              <Field name="email" />
              <ErrorMessage
                name="email"
                style={{ color: "red" }}
                component="span"
              />

              <label>Endereço</label>
              <Field name="endereco" />
              <ErrorMessage
                name="endereco"
                style={{ color: "red" }}
                component="span"
              />

              <label>Número</label>
              <Field name="numero" />
              <ErrorMessage
                name="numero"
                style={{ color: "red" }}
                component="span"
              />

              <label>Cep</label>
              <Field name="cep" />
              <ErrorMessage
                name="cep"
                style={{ color: "red" }}
                component="span"
              />

              <label>Bairro</label>
              <Field name="bairro" />
              <ErrorMessage
                name="bairro"
                style={{ color: "red" }}
                component="span"
              />

              <label>Cidade</label>
              <Field name="cidade" />
              <ErrorMessage
                name="cidade"
                style={{ color: "red" }}
                component="span"
              />

              <label>Latitude</label>
              <Field name="latitude" />
              <ErrorMessage
                name="latitude"
                style={{ color: "red" }}
                component="span"
              />

              <label>Longitude</label>
              <Field name="longitude" />
              <ErrorMessage
                name="longitude"
                style={{ color: "red" }}
                component="span"
              />
            </div>

            <div className="Btn">
              <br></br>
              <button type="submit" disabled={isSubmitting || !isValid} onClick={Alertar}>
                Salvar
              </button>
              {/* <button onClick={()=> navigate("jogoExemplo/"+item.id)}>DETALHES</button> */}

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

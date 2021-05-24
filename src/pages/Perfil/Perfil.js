import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import api from "../../Services/api";
import "./Perfil.css";
import { getToken } from "../../Services/auth";
import { responsiveFontSizes } from "@material-ui/core";

function Perfil() {
  const [username, setUsername] = useState();
  const [cpf, setCpf] = useState();
  const [email, setEmail] = useState();
  const [cep, setCep] = useState();
  const [password, setPassword] = useState();
  const [complement, setComplement] = useState();
  const [number, setNumber] = useState();
  const [birthdate, setBirthdate] = useState();
  const history = useHistory();

  function saveperfil() {
    updateUser({ username, cpf, cep, complement, number, birthdate });
    alert("Dados salvos com sucesso!");
    history.push("home");
  }

  async function getUser(field) {
    try {
      const token = getToken();
      const response = await api.get(`/user`);
      console.log(response.data.username);
      return response.data.username;
    } catch (error) {
      console.warn(error);
      alert("Algo deu errado");
    }
  }

  async function updateUser(fieldUpdate) {
    try {
      const token = getToken();
      const response = await api.put(`/user`, fieldUpdate);
    } catch (error) {
      console.warn(error);
      alert("Algo deu errado");
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="basePerfil">
      <div className="containerPerfil">
        <div className="titlePerfil">
          <u>Dados Cadastrados</u>
        </div>
        <Form className="inputsPerfil">
          <Form.Group controlId="usernamePerfil">
            <Form.Label>
              <b>Username</b>
            </Form.Label>
            <Form.Control
              type="usernamePerfil"
              placeholder=""
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="cpfPerfil">
            <Form.Label>
              <b>CPF</b>
            </Form.Label>
            <Form.Control
              type="cpfPerfil"
              placeholder=""
              onChange={(e) => setCpf(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="emailPerfil">
            <Form.Label>
              <b>Email</b>
            </Form.Label>
            <Form.Control
              type="emailPerfil"
              placeholder=""
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="cepPerfil">
            <Form.Label>
              <b>CEP</b>
            </Form.Label>
            <Form.Control
              type="cepPerfil"
              placeholder=""
              onChange={(e) => setCep(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="passwordPerfil">
            <Form.Label>
              <b>Password</b>
            </Form.Label>
            <Form.Control
              type="passwordPerfil"
              placeholder=""
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="complementPerfil">
            <Form.Label>
              <b>Complement (house number,etc)</b>
            </Form.Label>
            <Form.Control
              type="complementPerfil"
              placeholder=""
              onChange={(e) => setComplement(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="cellphonePerfil">
            <Form.Label>
              <b>Cell Phone Number</b>
            </Form.Label>
            <Form.Control
              type="cellphonePerfil"
              placeholder=""
              onChange={(e) => setNumber(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="birthdatePerfil">
            <Form.Label>
              <b>Birth Date</b>
            </Form.Label>
            <Form.Control
              type="birthdatePerfil"
              placeholder=""
              onChange={(e) => setBirthdate(e.target.value)}
            />
          </Form.Group>
        </Form>
        <div className="buttonsave2">
          <Button className="buttonsave" variant="dark" onClick={saveperfil}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Perfil;

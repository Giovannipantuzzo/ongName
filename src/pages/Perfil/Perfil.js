import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import api from "../../Services/api";
import "./Perfil.css";
import MaskedFormControl from "react-bootstrap-maskedinput";

function Perfil() {
  const [user, setUser] = useState();

  const history = useHistory();

  async function updateUser() {
    try {
      let updatedUser = {};
      Object.keys(user).forEach((key) => {
        if (
          user[key] &&
          key !== "user_id" &&
          key !== "email" &&
          key !== "firebase_id"
        ) {
          updatedUser[key] = user[key];
          console.log(key);
        }
      });
      await api.put(`/user`, updatedUser);
      alert("Dados salvos com sucesso!");
      window.location.href = "/home";
    } catch (error) {
      console.warn(error);
      alert("Algo deu errado");
    }
  }

  function handleUpdate(value, key) {
    user[key] = value;
    setUser({ ...user });
  }

  useEffect(() => {
    async function getUser() {
      try {
        const response = await api.get(`/user`);
        console.log(response.data.username);
        sessionStorage.setItem("nameUser", response.data.username);
        setUser({ ...response.data });
      } catch (error) {
        console.warn(error);
        alert("Algo deu errado");
      }
    }
    getUser();
    console.log(user);
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
              <b>Nome</b>
            </Form.Label>

            <Form.Control
              type="text"
              placeholder=""
              value={user && user.username}
              onChange={(e) => handleUpdate(e.target.value, "username")}
            />
          </Form.Group>
          <Form.Group controlId="cpfPerfil">
            <Form.Label>
              <b>CPF</b>
            </Form.Label>
            <MaskedFormControl
              mask="111.111.111-11"
              type="cpfPerfil"
              placeholder=""
              value={user && user.cpf}
              onChange={(e) => handleUpdate(e.target.value, "cpf")}
            />
          </Form.Group>

          <Form.Group controlId="cepPerfil">
            <Form.Label>
              <b>CEP</b>
            </Form.Label>
            <MaskedFormControl
              mask="11111-111"
              type="cepPerfil"
              placeholder=""
              value={user && user.cep}
              onChange={(e) => handleUpdate(e.target.value, "cep")}
            />
          </Form.Group>

          <Form.Group controlId="complementPerfil">
            <Form.Label>
              <b>Complemento (Número da residência,etc)</b>
            </Form.Label>
            <Form.Control
              type="complementPerfil"
              placeholder=""
              value={user && user.complement}
              onChange={(e) => handleUpdate(e.target.value, "complement")}
            />
          </Form.Group>
          <Form.Group controlId="cellphonePerfil">
            <Form.Label>
              <b>Telefone</b>
            </Form.Label>
            <MaskedFormControl
              mask="(31)11111-1111"
              type="cellphonePerfil"
              placeholder=""
              value={user && user.number}
              onChange={(e) => handleUpdate(e.target.value, "number")}
            />
          </Form.Group>
          <Form.Group controlId="birthdatePerfil">
            <Form.Label>
              <b>Data de nascimento</b>
            </Form.Label>
            <MaskedFormControl
              mask="11/11/1111"
              type="birthdatePerfil"
              placeholder=""
              value={user && user.birthDate}
              onChange={(e) => handleUpdate(e.target.value, "birthDate")}
            />
          </Form.Group>
          <Form.Group controlId="emailPerfil">
            <Form.Label>
              <b>Email</b>
            </Form.Label>
            <Form.Control
              type="emailPerfil"
              placeholder=""
              value={user?.email}
            />
          </Form.Group>
          <Form.Group controlId="passwordPerfil">
            <Form.Label>
              <b>Senha</b>
            </Form.Label>
            <Form.Control type="passwordPerfil" placeholder="" />
          </Form.Group>
        </Form>
        <div className="buttonsave2">
          <Button className="buttonsave" variant="dark" onClick={updateUser}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Perfil;

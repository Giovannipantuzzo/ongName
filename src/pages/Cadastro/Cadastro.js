import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Cadastro.css";

function Cadastro() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [number, setNumber] = useState();
  const history = useHistory();

  function cadastrar() {
    alert("Conta criada com sucesso!\n" + email);
    history.push("home");
  }

  return (
    <>
      <div className="baseCadastro">
        <div className="containerCadastro">
          <form style={{ borderRadius: "1rem" }} className="inputs2">
            <div className="titleConfig2">
              <h1>Crie sua conta</h1>
            </div>
            <Form.Group controlId="name">
              <Form.Control
                type="name"
                placeholder="full name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="email2">
              <Form.Control
                type="email2"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="password2">
              <Form.Control type="password2" placeholder="password" />
            </Form.Group>
            <Form.Group controlId="confirmPassword">
              <Form.Control
                type="confirmPassword"
                placeholder="confirm password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="number">
              <Form.Control
                type="number"
                placeholder="cell phone number"
                onChange={(e) => setNumber(e.target.value)}
              />
            </Form.Group>
            <div className="desce">
              <Button
                className="cadastrarConfig"
                variant="dark"
                onClick={cadastrar}
              >
                Cadastrar
              </Button>{" "}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Cadastro;

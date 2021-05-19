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
    console.log(name);
    if (!name || !email || !password || !confirmPassword || !number) {
      alert("Preencha todos os campos para efetuar o cadastro!");
    } else if (password !== confirmPassword) {
      alert("Senhas diferentes, por favor, coloque senhas iguais!");
    } else if (password == confirmPassword) {
      alert("Conta criada com sucesso!\n" + email);
      history.push("login");
    }
  }

  return (
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
          <Form.Group controlId="email">
            <Form.Control
              type="email2"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="password2">
            <Form.Control
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="confirmPassword">
            <Form.Control
              type="password"
              placeholder="confirm password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="number">
            <Form.Control
              type="text"
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
  );
}

export default Cadastro;

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Cadastro.css";
import api from "../../Services/api";
import "bootstrap/dist/css/bootstrap.min.css";
import MaskedFormControl from "react-bootstrap-maskedinput";

function Cadastro() {
  const Swal = require("sweetalert2");
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [number, setNumber] = useState();
  const history = useHistory();

  function cadastrar() {
    if (!name || !email || !password || !confirmPassword || !number) {
      let timerInterval;
      Swal.fire({
        title: "Preencha todos os campos para efetuar o cadastro!",
        html: "Auto close in <b></b> milliseconds.",
        timer: 2400,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          timerInterval = setInterval(() => {
            const content = Swal.getHtmlContainer();
            if (content) {
              const b = content.querySelector("b");
              if (b) {
                b.textContent = Swal.getTimerLeft();
              }
            }
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      });
    } else if (password.length < 6) {
      let timerInterval;
      Swal.fire({
        title: "A senha deve conter no mínimo 6 dígitos!",
        html: "Auto close in <b></b> milliseconds.",
        timer: 1700,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          timerInterval = setInterval(() => {
            const content = Swal.getHtmlContainer();
            if (content) {
              const b = content.querySelector("b");
              if (b) {
                b.textContent = Swal.getTimerLeft();
              }
            }
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      });
    } else if (password !== confirmPassword) {
      let timerInterval;
      Swal.fire({
        title: "Senhas diferentes, por favor, coloque senhas iguais!",
        html: "Auto close in <b></b> milliseconds.",
        timer: 2400,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          timerInterval = setInterval(() => {
            const content = Swal.getHtmlContainer();
            if (content) {
              const b = content.querySelector("b");
              if (b) {
                b.textContent = Swal.getTimerLeft();
              }
            }
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      });
    } else if (password === confirmPassword) {
      let data = {};
      function addToData(key, value) {
        if (value !== undefined && value !== "") {
          data = { ...data, [key]: value };
        }
      }
      addToData("username", name);
      addToData("email", email);
      addToData("password", password);
      addToData("number", number);

      api
        .post("/user", data)
        .then(() => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Conta criada com sucesso!\n" + name,
            showConfirmButton: false,
            timer: 1900,
          });
          history.push("/login");
        })
        .catch((error) => {
          console.warn(error);
          alert("Não foi possível concluir o cadastro, tente novamente.");
        });
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
            <MaskedFormControl
              mask="(11)11111-1111"
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

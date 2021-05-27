import React, { useState } from "react";
import "./Login.css";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import api from "../../Services/api";
import { login } from "../../Services/auth";

function Login() {
  const Swal = require("sweetalert2");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await api.post("/login", { email, password });
      sessionStorage.setItem("nameUser", response.data.user.username);
      sessionStorage.setItem("numberUser", response.data.user.number);
      sessionStorage.setItem("cpfUser", response.data.user.cpf);
      sessionStorage.setItem("cepUser", response.data.user.cep);
      sessionStorage.setItem("complementUser", response.data.user.complement);
      sessionStorage.setItem("birthDateUser", response.data.user.birthDate);
      let timerInterval;
      Swal.fire({
        title: "Bem vindo! " + response.data.user.username,
        html: "Auto close in <b></b> milliseconds.",
        timer: 1100,
        icon: "success",
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
          login(response.data.accessToken);
          window.location.href = "/home";
        },
      });
    } catch (error) {
      if (error.response.status === 403) {
        Swal.fire({
          icon: "error",
          title: "Credenciais Inválidas!",
          text: "Verifique os dados inseridos",
          confirmButtonColor: "black",
        });
        // alert("Credenciais Invalidas!");
      } else if (error.response.data) {
        alert(error.response.data.notification);
      } else console.warn(error);
    }
  }

  return (
    <div className="baseLogin">
      <div className="containerLogin">
        <form className="inputsLogin">
          <div className="titleLoginConfig">
            <h1>Login</h1>
          </div>
          <Form.Group controlId="email">
            <Form.Control
              type="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <div className="entrarConfig2">
            <Button
              className="entrarConfig"
              variant="dark"
              onClick={handleLogin}
            >
              Entrar
            </Button>{" "}
          </div>
          <div className="linkConfig2">
            <Link className="linkConfig" to="cadastro">
              Cadastre-se já
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

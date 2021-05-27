import React, { useState } from "react";
import "./Login.css";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import api from "../../Services/api";
import { login } from "../../Services/auth";
const Swal = require("sweetalert2");

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function esqueciSenha() {
    try {
      const { value: emailChange } = await Swal.fire({
        title: "Digite seu email",
        customClass: "swal-wide",
        input: "email",
        inputPlaceholder: "Digite seu email aqui ",
        confirmButtonColor: "black",
        showCancelButton: true,
      });

      if (emailChange) {
        Swal.fire(`Email enviado com sucesso`);
        await api.post(`/forgotPassword`, { email: emailChange });
      }
    } catch (error) {
      console.warn(error);
      alert("Algo deu errado");
    }
  }

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
      alert("Bem vindo");
      login(response.data.accessToken);
      window.location.href = "/home";
    } catch (error) {
      if (error.response.status === 403) {
        alert("Credenciais Invalidas!");
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
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Link className="linkConfig" onClick={() => esqueciSenha()}>
            Esqueci a Senha
          </Link>{" "}
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

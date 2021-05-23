import React, { useState } from "react";
import "./Login.css";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import api from "../../Services/api";
import { login } from "../../Services/auth";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await api.post("/login", { email, password });
      sessionStorage.setItem("nameUser", response.data.user.username);
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

import React, { useState } from "react";
import "./Login.css";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();

    function login() {
        alert("Bem vindo!\n" + email);
        history.push("home");
    }
    
    return(
        
        <div className="base">
            <img className="image" src="/images/Cachorros.png" alt="Cachorros de fundo"></img>
            <div className="container">
                <form className="inputs">
                    <div className="titleConfig"><h1>Login</h1></div>
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
                    <Button className="loginConfig" variant="dark" onClick={login}>Entrar</Button>{' '}
                    <Link className="linkConfig" to="cadastro">Cadastre-se já</Link>
                </form>
            </div>
        </div>
    )
}

export default Login;
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

    return(
        <div>
             <div className="base">
                <img className="image" src="/images/Cachorros.png" alt="Cachorros de fundo"></img>
                    <div className="container">
                        <form style={{ borderRadius: "1rem"}} className="inputs">
                            <div className="titleConfig"><h1>Crie sua conta</h1></div>
                            <div className="buttons">
                                <Form.Group controlId="name">
                                    <Form.Control 
                                        type="name" 
                                        placeholder="full name" 
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Form.Group>
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
                                    />
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
                            </div>
                                <Button className="cadastrarConfig" variant="dark" onClick={cadastrar}>
                                    Cadastrar
                                    </Button>{' '}
                        </form>
                    </div>
            </div>
        </div>
    )
}

export default Cadastro;
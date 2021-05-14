import React, { useState } from "react";
import { Form, Col } from "react-bootstrap";
import "./Perfil.css";

function Perfil() {
  const [username, setUsername] = useState();
  const [cpf, setCpf] = useState();
  const [email, setEmail] = useState();
  const [cep, setCep] = useState();
  const [password, setPassword] = useState();
  const [complement, setComplement] = useState();
  const [cellphone, setCellphone] = useState();
  const [birthdate, setBirthdate] = useState();

  return (
    <div className="basePerfil">
      <div className="containerPerfil">
        <div className="titlePerfil">
          <u>Dados Cadastrados</u>
        </div>
        <Form className="inputsPerfil">
          <Form.Row>
            <Form.Group as={Col} controlId="usernamePerfil">
              <Form.Label>
                <b>Username</b>
              </Form.Label>
              <Form.Control
                type="usernamePerfil"
                placeholder=""
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="cpfPerfil">
              <Form.Label>
                <b>CPF</b>
              </Form.Label>
              <Form.Control
                type="cpfPerfil"
                placeholder=""
                onChange={(e) => setCpf(e.target.value)}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="emailPerfil">
              <Form.Label>
                <b>Email</b>
              </Form.Label>
              <Form.Control
                type="emailperfil"
                placeholder=""
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="cepPerfil">
              <Form.Label>
                <b>CEP</b>
              </Form.Label>
              <Form.Control
                type="cepPerfil"
                placeholder=""
                onChange={(e) => setCep(e.target.value)}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="passwordPerfil">
              <Form.Label>
                <b>Password</b>
              </Form.Label>
              <Form.Control
                type="passwordPerfil"
                placeholder=""
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="complementPerfil">
              <Form.Label>
                <b>Complement (house,number,etc)</b>
              </Form.Label>
              <Form.Control
                type="complementPerfil"
                placeholder=""
                onChange={(e) => setComplement(e.target.value)}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="cellphonePerfil">
              <Form.Label>
                <b>Cell Phone Number</b>
              </Form.Label>
              <Form.Control
                type="cellphonePerfil"
                placeholder=""
                onChange={(e) => setCellphone(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="birthdatePerfil">
              <Form.Label>
                <b>Birth Date</b>
              </Form.Label>
              <Form.Control
                type="birthdatePerfil"
                placeholder=""
                onChange={(e) => setBirthdate(e.target.value)}
              />
            </Form.Group>
          </Form.Row>
        </Form>
      </div>
    </div>
  );
}

export default Perfil;

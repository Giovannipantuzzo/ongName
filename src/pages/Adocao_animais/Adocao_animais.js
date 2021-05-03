import React, { useState } from "react";
import "./Adocao_animais.css";
import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Adocao_animais() {
  const history = useHistory();

  function adotar() {
    history.push("animal");
  }

  return (
    <div className="base1">
      <Card style={{ width: "18rem",cursor:"pointer"}} onClick={()=>adotar()}>
        <Card.Img variant="top" src="/images/CachorroRosa.jpg" />
        <Card.Body>
          <Card.Title>Adote Pink</Card.Title>
          <Card.Text>
            Belo Horizonte - MG
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Adocao_animais;

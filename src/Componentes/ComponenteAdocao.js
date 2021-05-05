import React from "react";
import { Card } from "react-bootstrap";
import { BiCurrentLocation, BiMaleSign, BiFemaleSign } from "react-icons/bi";
import { IconContext } from "react-icons";
import { useHistory } from "react-router-dom";
import "../pages/Adocao_animais/Adocao_animais.css";

function ComponenteAdocao({ animal }) {
  const history = useHistory();

  function adotar() {
    history.push("animal");
  }

  function Sexo() {
    if (animal.sexo === "Male") return <BiMaleSign />;
    else return <BiFemaleSign />;
  }

  return (
    <Card
      style={{ width: "18rem", cursor: "pointer" }}
      onClick={() => adotar()} className="sombra_AdocaoAnimais"
    >
      <Card.Img variant="top" src={animal.imagem} />
      <Card.Body>
        <Card.Text>
          <div className="organizacao_AdocaoAnimais">
            <div className="nome_AdocaoAnimais">{animal.nome}</div>
            <div className="tamanhoSexo_AdocaoAnimais">
              <p className="tamanho_AdocaoAnimais">{animal.tamanho}|</p>
              <IconContext.Provider value={{ size: "1.5rem" }}>
                {Sexo()}
              </IconContext.Provider>
            </div>
          </div>
        </Card.Text>
        <Card.Text>
          <BiCurrentLocation />
          {animal.local}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ComponenteAdocao;

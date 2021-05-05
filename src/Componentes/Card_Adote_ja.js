import React from "react";
import "./componentes_adote_ja.css";
import { Card } from "react-bootstrap";
import { BiCurrentLocation, BiMaleSign, BiFemaleSign } from "react-icons/bi";
import { useHistory } from "react-router";

function Produto({ animal }) {
  const history = useHistory();
  function Sexo() {
    if (animal.sexo === "Male") return <BiMaleSign />;
    else return <BiFemaleSign />;
  }
  function telaAnimal() {
    history.push("animal");
  }

  return (
    <Card
      style={{ width: "18rem", cursor: "pointer" }}
      onClick={() => telaAnimal()}
      className="Shadow"
    >
      <Card.Img
        variant="top"
        src={animal.imagem}
        alt="Exemplo"
        style={{ borderRadius: "30px" }}
      />
      <Card.Body style={{ padding: "5px" }}>
        <div className="Border">
          <p align="center" className="tituloAdote_ja">
            Adote {animal.nome}
          </p>
          <p align="center" className="tempoAbrigo">
            Tempo de abrigo: {animal.tempo}
          </p>
          <div className="infoRow">
            <p className="Cidade">
              <BiCurrentLocation />
              {animal.local}
            </p>
            <div className="SexoAdote_Ja">
              <p>{animal.tamanho} |</p>
              {Sexo()}
            </div>
          </div>
          <p className="description" align="center">
            {animal.descricao}
          </p>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Produto;

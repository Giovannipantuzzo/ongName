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
      style={{ weight: "300px", cursor: "pointer" }}
      onClick={() => telaAnimal()}
      className="Card_adoteJa"
    >
      <Card.Img
        variant="top"
        src={animal.imagem[0]}
        alt="Exemplo"
        height="250px"
        width="100%"
        style={{ borderRadius: "30px", objectFit: "cover" }}
        className="imgAdoteJa"
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
            <p className="CidadeAdoteJa">
              <BiCurrentLocation />
              {animal.local}
            </p>
            <div className="SexoAdote_Ja">
              <p>{animal.tamanho} |</p>
              {Sexo()}
            </div>
          </div>
          <p className="descriptionAdoteJa" align="center">
            {animal.descricao}
          </p>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Produto;

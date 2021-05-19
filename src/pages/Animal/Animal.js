import React, { useState } from "react";
import "./Animal.css";
import Figure from "react-bootstrap/Figure";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "react-bootstrap/Image";
import { useHistory } from "react-router-dom";
import AnimaisReais from "../../Componentes/AnimaisReais";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 7.5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3.2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 750 },
    items: 2.7,
  },
  tablet: {
    breakpoint: { max: 750, min: 464 },
    items: 2.4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.8,
  },
};

function Animal({ location, ...props }) {
  const history = useHistory();
  const { animal } = location.state;
  const [imagemEndereco, setimagemEndereco] = useState(animal.imagem[0]);
  function adotado() {
    alert(
      "Animal adotado com sucesso. Entre em contato com a ONG para combinar o encontro."
    );
    history.push("home");
  }
  function mudaImagem(endereco) {
    setimagemEndereco(endereco);
  }
  function adotarEsse(animal) {
    history.push({ pathname: "/animal", state: { animal } });
    setimagemEndereco(animal.imagem[0]);
  }

  return (
    <div>
      <div className="divAnimalDescricao">
        <div className="containerAnimal">
          <div className="itemAnimalImage">
            {animal.imagem.map((Imagem) => (
              <div className="divImageAnimal">
                <Image
                  className="animalItem"
                  key={Imagem}
                  src={Imagem}
                  onClick={() => {
                    mudaImagem(Imagem);
                  }}
                  rounded
                />
              </div>
            ))}
          </div>
          <div className="divImageCentral">
            <Image className="imageCentral" src={imagemEndereco} rounded />
          </div>
        </div>
        <div className="containerLateral">
          <Card>
            <Card.Body>
              <Card.Title className="nomePet">
                {animal.nome}, {animal.tempo}
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted subTitlePet">
                {animal.local}, tamanho {animal.tamanho}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted subTitlePet">
                {animal.Raca}
              </Card.Subtitle>
              <p className="paragrafoAnimal">{animal.descricao}</p>
            </Card.Body>
          </Card>
          <div className="divButtonAdote">
            <Button
              style={{
                background: "#EDFE26",
                color: "black",
                fontWeight: "bold",
                borderColor: "#EDFE26",
                borderRadius: "0.9rem",
                width: "15rem",
                height: "3rem",
              }}
              onClick={adotado}
            >
              <p> Adote agora </p>
            </Button>
          </div>
        </div>
      </div>
      <div className="paiCarrosselComentario">
        <div className="carrosselAnimal">
          <Carousel responsive={responsive}>
            {AnimaisReais.map((animaisAdoteJa) => (
              <div
                className="itemAnimalCarrossel"
                onClick={() => {
                  adotarEsse(animaisAdoteJa);
                }}
              >
                <img src={animaisAdoteJa.imagem[0]} className="imageAnimal" />
                <div class="middleAnimal">
                  <div class="textAnimal">
                    {animaisAdoteJa.nome} <br />
                    {animaisAdoteJa.local}
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="comentariosAnimal">
          <div className="tituloComentario">
            <p>
              <b>Comentários</b>
            </p>
          </div>
          <div className="comentarioFuncionario">
            <div className="perfilComentario">
              <img src="./images/tonyStark.png" className="imagePerfil" />
            </div>
            <div className="textoComentario">
              <p>
                <u>
                  <b>Tony Stark:</b>
                </u>{" "}
                Pet lindo dócil e brincalhão, necessita de cuidadose especiais.
              </p>
            </div>
          </div>
          <div className="comentarioFuncionario">
            <div className="perfilComentario">
              <img src="./images/juliette.png" className="imagePerfil" />
            </div>
            <div className="textoComentario">
              <p>
                <u>
                  <b>Juliette:</b>
                </u>{" "}
                Esse pet é maravilhoso, porém meio arrisco, sempre desconfiado.
              </p>
            </div>
          </div>
          <div className="comentarioFuncionario">
            <div className="perfilComentario">
              <img src="./images/gilberto.png" className="imagePerfil" />
            </div>
            <div className="textoComentario">
              <p>
                <u>
                  <b>Gilberto:</b>
                </u>{" "}
                Esse pet é especial, com muito amor para dar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Animal;

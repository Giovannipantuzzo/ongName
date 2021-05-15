import React from "react";
import "./Animal.css";
import Figure from "react-bootstrap/Figure";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "react-bootstrap/Image";

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

function Animal() {
  return (
    <div>
      <div className="divAnimalDescricao">
        <div className="containerAnimal">
          <div className="itemAnimalImage">
            <div className="divImageAnimal">
              <Image
                className="animalItem"
                src="./images/dogHome1.png"
                rounded
              />
            </div>
            <div className="divImageAnimal">
              <Image
                className="animalItem"
                src="./images/dogHome1.png"
                rounded
              />
            </div>
            <div className="divImageAnimal">
              <Image
                className="animalItem"
                src="./images/dogHome1.png"
                rounded
              />
            </div>
            <div className="divImageAnimal">
              <Image
                className="animalItem"
                src="./images/dogHome1.png"
                rounded
              />
            </div>
          </div>
          <div className="divImageCentral">
            <Image
              className="imageCentral"
              src="./images/dogHome1.png"
              rounded
            />
          </div>
        </div>
        <div className="containerLateral">
          <Card>
            <Card.Body>
              <Card.Title className="nomePet">Bile, 2 anos</Card.Title>
              <Card.Subtitle className="mb-2 text-muted subTitlePet">
                Belo Horizonte
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted subTitlePet">
                Vira lata
              </Card.Subtitle>
              <p className="paragrafoAnimal">
                Olá! Meu nome é Billie, tenho 2 anos e estou a procura de um
                novo lar. Sou muito dócil, brincalhão, e adoro passear. Perdi
                uma perna quando era bebê, mas isso não me impede de brincar
                bastante. A ONG me encontrou ainda novinho, tinha apenas 4
                meses, estava bem magrinho e desnutrido.
              </p>
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
                paddingTop: "1rem",
              }}
            >
              Adote agora
            </Button>
          </div>
        </div>
      </div>
      <div className="paiCarrosselComentario">
        <div className="carrosselAnimal">
          <Carousel responsive={responsive}>
            <div className="itemAnimalCarrossel">
              <img src="./images/dogHome1.png" className="imageAnimal" />
              <div class="middleAnimal">
                <div class="textAnimal">
                  Pluto <br />
                  Bicas/MG
                </div>
              </div>
            </div>
            <div className="itemAnimalCarrossel">
              <img src="./images/dogHome1.png" className="imageAnimal" />
              <div class="middleAnimal">
                <div class="textAnimal">John Doe</div>
              </div>
            </div>
            <div className="itemAnimalCarrossel">
              <img src="./images/dogHome1.png" className="imageAnimal" />
              <div class="middleAnimal">
                <div class="textAnimal">John Doe</div>
              </div>
            </div>
            <div className="itemAnimalCarrossel">
              <img src="./images/dogHome1.png" className="imageAnimal" />
              <div class="middleAnimal">
                <div class="textAnimal">John Doe</div>
              </div>
            </div>
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
                Lindo cachorro dócil e brincalhão, necessita de cuidadose
                especiais pela dificultade de andar.
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
                Billie é maravilhoso, porém meio arrisco, sempre desconfiado.
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
                Billie é um cãozinho especial, com muito amor para dar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Animal;

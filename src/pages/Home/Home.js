import React from "react";
import { Carousel as CarouselBootstrap } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";
import { BiMaleSign, BiFemaleSign } from "react-icons/bi";
import "./Home.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 8.5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1700 },
    items: 6.5,
  },
  desktop: {
    breakpoint: { max: 1700, min: 1024 },
    items: 5.2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 750 },
    items: 3.7,
  },
  tablet: {
    breakpoint: { max: 750, min: 620 },
    items: 3.3,
  },
  tablet: {
    breakpoint: { max: 620, min: 575 },
    items: 2.9,
  },
  tablet: {
    breakpoint: { max: 575, min: 464 },
    items: 2.3,
  },
  mobile: {
    breakpoint: { max: 464, min: 360 },
    items: 2.1,
  },
  mobile: {
    breakpoint: { max: 360, min: 0 },
    items: 1.52,
  },
};

function Home() {
  const history = useHistory();
  return (
    <div>
      <div>
        <Carousel fade>
          <Carousel.Item
            style={{ display: "flex", flexDirection: "row", width: "100%" }}
          >
            <div></div>
            <img
              className="d-block w-100"
              src="./images/dogHome1.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <Card.Text></Card.Text>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <img
              className="d-block w-100"
              src="./images/dogHome2.png"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <img
              className="d-block w-100"
              src="./images/dogHome3.png"
              alt="Third slide"
            />
            <Carousel.Caption>
              <Card.Text></Card.Text>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <CarouselBootstrap fade>
        <CarouselBootstrap.Item
          style={{ display: "flex", flexDirection: "row", width: "100%" }}
        >
          <img
            className="d-block w-100"
            src="./images/dogHome1.png"
            alt="First slide"
          />
          <CarouselBootstrap.Caption>
            <Card.Text></Card.Text>
          </CarouselBootstrap.Caption>
        </CarouselBootstrap.Item>
        <CarouselBootstrap.Item
          style={{ display: "flex", flexDirection: "row", width: "100%" }}
        >
          <img
            className="d-block w-100"
            src="./images/dogHome2.png"
            alt="Second slide"
          />
        </CarouselBootstrap.Item>
        <CarouselBootstrap.Item
          style={{ display: "flex", flexDirection: "row", width: "100%" }}
        >
          <img
            className="d-block w-100"
            src="./images/dogHome3.png"
            alt="Third slide"
          />
          <CarouselBootstrap.Caption>
            <Card.Text></Card.Text>
          </CarouselBootstrap.Caption>
        </CarouselBootstrap.Item>
      </CarouselBootstrap>
      {/* <h1 className="tittleAdoteHome"> Adote já </h1>
      <div className="baseCarrosel2">
        <Carousel responsive={responsive}>
          <div className="CarrosselHome2">
            <img
              src="./images/dogHome1.png"
              className="imageAnimalCarrossel2"
              style={{ cursor: "pointer" }}
              onClick={() => {
                history.push("animal");
              }}
            />
            <div class="middleAnimalCarrossel2">
              <div class="textAnimalCarrossel2">
                Pluto <br />
                Bicas/MG
                <BiMaleSign />
              </div>
            </div>
          </div>
          <div className="CarrosselHome2">
            <img
              src="./images/dogHome1.png"
              className="imageAnimalCarrossel2"
              style={{ cursor: "pointer" }}
              onClick={() => {
                history.push("animal");
              }}
            />
            <div class="middleAnimalCarrossel2">
              <div class="textAnimalCarrossel2">
                John Doe <br />
                Bicas/MG
                <BiFemaleSign />
              </div>
            </div>
          </div>
          <div className="CarrosselHome2">
            <img
              src="./images/dogHome1.png"
              className="imageAnimalCarrossel2"
              style={{ cursor: "pointer" }}
              onClick={() => {
                history.push("animal");
              }}
            />
            <div class="middleAnimalCarrossel2">
              <div class="textAnimalCarrossel2">
                John Doe <br />
                Bicas/MG
                <BiMaleSign />
              </div>
            </div>
          </div>
          <div className="CarrosselHome2">
            <img
              src="./images/dogHome1.png"
              className="imageAnimalCarrossel2"
              style={{ cursor: "pointer" }}
              onClick={() => {
                history.push("animal");
              }}
            />
            <div class="middleAnimalCarrossel2">
              <div class="textAnimalCarrossel2">
                John Doe <br />
                Bicas/MG
                <BiFemaleSign />
              </div>
            </div>
          </div>
          <div className="CarrosselHome2">
            <img
              src="./images/dogHome1.png"
              className="imageAnimalCarrossel2"
              style={{ cursor: "pointer" }}
            />
            <div class="middleAnimalCarrossel2">
              <div class="textAnimalCarrossel2">
                John Doe <br />
                Bicas/MG
                <BiMaleSign />
              </div>
            </div>
          </div>
          <div className="CarrosselHome2">
            <img
              src="./images/dogHome1.png"
              className="imageAnimalCarrossel2"
              style={{ cursor: "pointer" }}
            />
            <div class="middleAnimalCarrossel2">
              <div class="textAnimalCarrossel2">
                John Doe <br />
                Bicas/MG
                <BiMaleSign />
              </div>
            </div>
          </div>
          <div className="CarrosselHome2">
            <img
              src="./images/dogHome1.png"
              className="imageAnimalCarrossel2"
              style={{ cursor: "pointer" }}
            />
            <div class="middleAnimalCarrossel2">
              <div class="textAnimalCarrossel2">
                John Doe <br />
                Bicas/MG
                <BiFemaleSign />
              </div>
            </div>
          </div>
        </Carousel>
      </div> */}

      {/* <div className="Descricao_Home">
        <div className="SobreNos">
          <p className="SobreNosTitulo_Home">Sobre Nós</p>
          <p className="SobreNosDescricao_Home">
            ​Como um(a) Organização de adoção de animais líder, nossos projetos
            e campanhas são reconhecidos em todo o mundo. Trabalhamos para unir
            pessoas de todas as idades e origens que compartilham da crença de
            um mundo onde os animais estão livres de tratamentos cruéis e
            desumanos. A Pet Family é administrada por membros para seus
            membros, oferecendo uma voz unida e ampliada para todos os que se
            juntam à nossa comunidade.
          </p>
        </div>
        <div className="ComoDoar">
          <p className="ComoDoarDescricao_Home">
            Nossa instituição precisa muito de doações para poder manter o pleno
            funcionamento da ONG, por isso, pedimos contribuições em forma de
            depósito bancário ou pix. Conta: 25478-1 Pix: petfamily@gmail.com
          </p>
          <p className="ComoDoarTitulo_Home">Como Doar</p>
        </div>
        <div className="Colaboradores">
          <p className="ColaboradoresTitulo_Home">Colaboradores</p>
          <p className="ColaboradoresDescricao_Home">
            Bruno Campos <br></br> Gabriel Dias <br></br> Giovanni Pantuzzo
            <br></br> Matheus Franklin <br></br>
            Tainan Albuquerque
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default Home;

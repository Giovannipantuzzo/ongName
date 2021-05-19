import React from "react";
import { Carousel } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./Home.css";

function Home() {
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
      <div className="Descricao_Home">
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
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import { Carousel as CarouselBootstrap } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";
import { BiMaleSign, BiFemaleSign } from "react-icons/bi";
import "./Home.css";
import AnimaisAdoteJa from "../../Componentes/AnimaisAdoteJa";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 8.5,
  },
  desktop1: {
    breakpoint: { max: 3000, min: 1700 },
    items: 6.5,
  },
  desktop2: {
    breakpoint: { max: 1700, min: 1024 },
    items: 5.2,
  },
  tablet1: {
    breakpoint: { max: 1024, min: 750 },
    items: 3.7,
  },
  tablet2: {
    breakpoint: { max: 750, min: 620 },
    items: 3.3,
  },
  tablet3: {
    breakpoint: { max: 620, min: 575 },
    items: 2.9,
  },
  tablet4: {
    breakpoint: { max: 575, min: 464 },
    items: 2.3,
  },
  mobile1: {
    breakpoint: { max: 464, min: 360 },
    items: 1.8,
  },
  mobile2: {
    breakpoint: { max: 360, min: 0 },
    items: 1.52,
  },
};

const colaboradores = [
  // {
  //   id: 1,
  //   nome: "Arthur Lima",
  //   imagem: "./images/Colaboradores/ArthurLima.jpg",
  //    insta: "",
  // },

  {
    id: 2,
    nome: "Bruno Campos",
    imagem: "./images/Colaboradores/BrunoCampos.jpg",
    insta: "https://www.instagram.com/_brunohcampos",
  },

  {
    id: 3,
    nome: "Gabriel Dias",
    imagem: "./images/Colaboradores/GabrielDias.jpg",
    insta: "https://www.instagram.com/gabriel_h_dias2002/",
  },

  {
    id: 4,
    nome: "Giovanni Pantuzzo",
    imagem: "./images/Colaboradores/GiovanniPantuzzo.jpg",
    insta: "https://www.instagram.com/giovannipantuzzo/",
  },

  // {
  //   id: 5,
  //   nome: "Igor Amoras",
  //   imagem: "./images/Colaboradores/IgorAmoras.jpg",
  //insta: "",
  // },

  // {
  //   id: 6,
  //   nome: "Marcone Faria",
  //   imagem: "./images/Colaboradores/MarconeFaria.jpg",
  //insta: "",
  // },

  {
    id: 7,
    nome: "Matheus Franklin",
    imagem: "./images/Colaboradores/MatheusFranklin.jpg",
    insta: "https://www.instagram.com/matheus_franklin10/",
  },

  {
    id: 8,
    nome: "Tainan Albuquerque",
    imagem: "./images/Colaboradores/TainanAlbuquerque.jpg",
    insta: "https://www.instagram.com/thalbu/",
  },

  // {
  //   id: 9,
  //   nome: "Fernanda Mattos",
  //   imagem: "./images/Colaboradores/FernandaMattos.jpg",
  //insta: "",
  // },

  // {
  //   id: 10,
  //   nome: "Gabriel Mauad",
  //   imagem: "./images/Colaboradores/GabrielMauad.jpg",
  //insta: "",
  // },

  // {
  //   id: 11,
  //   nome: "Paulo Santos",
  //   imagem: "./images/Colaboradores/PauloSantos.jpg",
  //insta: "",
  // },
];

function Home() {
  const history = useHistory();
  function adotarEsse(animal) {
    history.push({ pathname: "/animal", state: { animal } });
  }

  return (
    <div>
      <CarouselBootstrap fade>
        <CarouselBootstrap.Item
          style={{ display: "flex", flexDirection: "row", width: "100%" }}
        >
          <img
            className="d-block w-100"
            src="./images/dogHome1.png"
            alt="First slide"
          />
          <div className="boxmsg1">
            <b className="msg1">
              Adotar é encher de esperanças um coração que antes não sabia o que
              era carinho, e receber em troca um presente único: O Amor
              Incondicional!!
            </b>
          </div>
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
          <div className="boxmsg1">
            <b className="msg2">
              Eles já nascem sabendo amar, de um jeito que nós levamos a vida
              inteira para aprender.
            </b>
          </div>
        </CarouselBootstrap.Item>
        <CarouselBootstrap.Item
          style={{ display: "flex", flexDirection: "row", width: "100%" }}
        >
          <img
            className="d-block w-100"
            src="./images/dogHome3.png"
            alt="Third slide"
          />
          <div className="boxmsg1">
            <b className="msg3">
              Adotar é viver uma belíssima experiencia de amor, gratidão e
              fidelidade.
            </b>
          </div>
          <CarouselBootstrap.Caption>
            <Card.Text></Card.Text>
          </CarouselBootstrap.Caption>
        </CarouselBootstrap.Item>
      </CarouselBootstrap>
      <h1 className="tittleAdoteHome"> Adote já </h1>
      <div className="baseCarrosel2">
        <Carousel responsive={responsive}>
          {AnimaisAdoteJa.map((animalAdoteJa) => (
            <div
              className="CarrosselHome2"
              onClick={() => {
                adotarEsse(animalAdoteJa);
              }}
            >
              <img
                className="imageAnimalCarrossel2"
                src={animalAdoteJa.imagem[0]}
                alt={animalAdoteJa.imagem[0]}
              />
              <div class="middleAnimalCarrossel2">
                <div class="textAnimalCarrossel2">
                  {animalAdoteJa.nome} <br />
                  {animalAdoteJa.local}
                  {animalAdoteJa.sexo === "Macho" ? (
                    <BiMaleSign />
                  ) : (
                    <BiFemaleSign />
                  )}
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>{" "}
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
        <div className="divPata">
          <img className="imagemPata" src="./images/pata.png" alt="pata" />
        </div>

        <div className="ComoDoar">
          <p className="ComoDoarTitulo_Home1">Como Doar</p>
          <div className="correcao">
            <p className="ComoDoarDescricao_Home">
              Nossa instituição precisa muito de doações para poder manter o
              pleno funcionamento da ONG, por isso, pedimos contribuições em
              forma de depósito bancário ou pix. O valor das doações será
              convertido em alimentação e tratamento médico dos nossos
              animaizinhos. Conta: 25478-1 Pix: petfamily@gmail.com
            </p>
            <div className="correcao2">
              <img className="qrcode" src="./images/qrcode.jpeg" alt="qrcode" />
            </div>
          </div>
          <p className="ComoDoarTitulo_Home2">Como Doar</p>
        </div>

        <div className="divPata">
          <img className="imagemPata" src="./images/pata.png" alt="pata" />
        </div>

        <div className="Colaboradores">
          <p className="ColaboradoresTitulo_Home">Colaboradores</p>
          <div className="ColaboradoresDescricao_Home">
            {colaboradores.map((colaborador) => {
              return (
                <div>
                  <a
                    class="insta"
                    href={colaborador.insta}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <div className="colaborador">
                      <img
                        className="imgColaborador"
                        src={colaborador.imagem}
                        alt="colaborador"
                        height="100"
                      />

                      <div className="nomeColaborador">
                        {" "}
                        {colaborador.nome}{" "}
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

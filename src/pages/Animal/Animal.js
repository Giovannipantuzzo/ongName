import React, { useState } from "react";
import "./Animal.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "react-bootstrap/Image";
import { useHistory } from "react-router-dom";
import AnimaisAdoteJa from "../../Componentes/AnimaisAdoteJa";
import { BiMaleSign, BiFemaleSign } from "react-icons/bi";
import { getToken } from "../../Services/auth";
const Swal = require("sweetalert2");

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop1: {
    breakpoint: { max: 3000, min: 2000 },
    items: 7,
  },
  desktop2: {
    breakpoint: { max: 2000, min: 1024 },
    items: 4,
  },
  tablet1: {
    breakpoint: { max: 1024, min: 750 },
    items: 2.7,
  },
  tablet2: {
    breakpoint: { max: 750, min: 520 },
    items: 3.4,
  },
  mobile: {
    breakpoint: { max: 520, min: 281 },
    items: 2.1,
  },
  Galaxy_Fold: {
    breakpoint: { max: 280, min: 0 },
    items: 1.7,
  },
};

function Animal({ location, ...props }) {
  const history = useHistory();
  const { animal } = location.state;
  console.log(animal);
  const [imagemEndereco, setimagemEndereco] = useState(animal.imagem[0]);
  const token = getToken();

  function adotado(animal) {
    if (token === null) {
      Swal.fire({
        title: "Alerta!",
        text: "Você deve fazer login para adotar um animal.",
        icon: "warning",
        confirmButtonText: "Entendi!",
        confirmButtonColor: "black",
      }).then((result) => history.push("login"));
    } else if (token != null) {
      if (
        nameUser === "null" ||
        nameUser === " " ||
        numberUser === "null" ||
        numberUser === " " ||
        cpfUser === "null" ||
        cpfUser === " " ||
        cepUser === "null" ||
        cepUser === " " ||
        complementUser === "null" ||
        complementUser === " " ||
        birthDateUser === "null" ||
        birthDateUser === " "
      ) {
        Swal.fire({
          title: "Alerta!",
          text: "Complete todas as informações do perfil para habilitar essa opção.",
          icon: "warning",
          confirmButtonText: "Entendi!",
          confirmButtonColor: "black",
        }).then((result) => history.push("perfil"));
      } else {
        Swal.fire({
          title:
            '<strong class="mensagemAdotado">Animal adotado com sucesso. Entre em contato com a ONG para combinar o encontro.</strong>',
          // icon: "info",
          imageUrl: animal.imagem[0],
          imageWidth: "50%",
          // html:
          // "You can use <b>bold text</b>, " +
          // '<a href="//sweetalert2.github.io">links</a> ' +
          // "and other HTML tags",
          showCloseButton: true,
          // showCancelButton: true,
          focusConfirm: false,
          confirmButtonText: '<i class="fa fa-thumbs-up"></i> Compreendi!',
          confirmButtonAriaLabel: "Compreendi!",
          confirmButtonColor: "black",
          // cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
          // cancelButtonAriaLabel: "Thumbs down",
        }).then((result) => history.push("home"));
        // alert(
        //   "Animal adotado com sucesso. Entre em contato com a ONG para combinar o encontro."
        // );
        // history.push("home");
      }
    }
  }
  function mudaImagem(endereco) {
    setimagemEndereco(endereco);
  }
  function adotarEsse(animal) {
    history.push({ pathname: "/animal", state: { animal } });
    setimagemEndereco(animal.imagem[0]);
  }

  const nameUser = sessionStorage.getItem("nameUser");
  const numberUser = sessionStorage.getItem("numberUser");
  const cpfUser = sessionStorage.getItem("cpfUser");
  const cepUser = sessionStorage.getItem("cepUser");
  const complementUser = sessionStorage.getItem("complementUser");
  const birthDateUser = sessionStorage.getItem("birthDateUser");

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
                  alt={Imagem}
                  onClick={() => {
                    mudaImagem(Imagem);
                  }}
                  rounded
                />
              </div>
            ))}
          </div>
          <div className="divImageCentral">
            <Image
              className="imageCentral"
              src={imagemEndereco}
              alt={imagemEndereco}
              rounded
            />
          </div>
        </div>
        <div className="containerLateral">
          <Card.Body>
            <p className="nomePet">
              {animal.nome}, {animal.tempo}
            </p>
            <p className="subTitlePet">
              {animal.local}, tamanho {animal.tamanho}
            </p>
            <p className="subTitlePet">Raça: {animal.Raca}</p>
            <p className="paragrafoAnimal">{animal.descricao}</p>
          </Card.Body>
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
              onClick={() => {
                adotado(animal);
              }}
            >
              <p> Adote agora </p>
            </Button>
          </div>
        </div>
      </div>
      <div className="paiCarrosselComentario">
        <div className="carrosselAnimal">
          <h1 className="tittleAdoteAnimal"> Adote já </h1>

          <Carousel responsive={responsive}>
            {AnimaisAdoteJa.map((animalAdoteJa) =>
              animalAdoteJa.id !== animal.id ? (
                <div
                  className="itemAnimalCarrossel"
                  onClick={() => {
                    adotarEsse(animalAdoteJa);
                  }}
                >
                  <img
                    src={animalAdoteJa.imagem[0]}
                    alt={animalAdoteJa.imagem[0]}
                    className="imageAnimal"
                  />
                  <div class="middleAnimal">
                    <div class="textAnimal">
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
              ) : null
            )}
          </Carousel>
        </div>
        <div className="comentariosAnimal">
          <div className="tituloComentario">Comentários</div>

          {animal.comentarios.map((comentario) => (
            <div className="comentarioFuncionario">
              <div className="perfilComentario">
                <Image
                  src={comentario.foto}
                  alt={comentario.nome}
                  className="imagePerfil"
                  roundedCircle
                />
              </div>
              <div className="textoComentario">
                <p>
                  <u>
                    <b>{comentario.nome}</b>
                  </u>
                  {": "}
                  {comentario.texto}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Animal;

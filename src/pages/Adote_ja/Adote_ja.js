import React from "react";
import "./Adote.css";
import Produto from "../../Componentes/Card_Adote_ja";

const animais = [
  {
    id: 1,
    imagem: "/images/Animais/dog12.jpg",
    nome: "Sarabi",
    tempo: "1 ano",
    local: "Curitiba/PR",
    tamanho: "M",
    sexo: "Female",
    descricao: " anos, de porte médio.",
  },
  {
    id: 2,
    imagem: "/images/Animais/dog2.jpg",
    nome: "Pluto",
    tempo: "2 anos",
    local: "Belo Horizonte/MG",
    tamanho: "P",
    sexo: "Female",
    descricao:
      "Olá! Meu nome é Billy e estou aqui há 2 anos esperando uma família adotiva. Sou dócil, mas infelizmente nasci sem uma das minhas pernas, por isso preciso de ajuda especial",
  },
  {
    id: 3,
    imagem: "/images/Animais/dog1.png",
    nome: "Billy",
    tempo: "2 anos",
    local: "Belo Horizonte/MG",
    tamanho: "G",
    sexo: "Male",
    descricao:
      "Olá! Meu nome é Billy e estou aqui há 2 anos esperando uma família adotiva. Sou dócil, mas infelizmente nasci sem uma das minhas pernas, por isso preciso de ajuda especial",
  },
  {
    id: 4,
    imagem: "/images/Animais/dog2.jpg",
    nome: "Pluto",
    tempo: "2 anos",
    local: "Belo Horizonte/MG",
    tamanho: "P",
    sexo: "Female",
    descricao:
      "Olá! Meu nome é Billy e estou aqui há 2 anos esperando uma família adotiva. Sou dócil, mas infelizmente nasci sem uma das minhas pernas, por isso preciso de ajuda especial",
  },
  {
    id: 5,
    imagem: "/images/Animais/dog1.png",
    nome: "Billy",
    tempo: "3 anos",
    local: "Belo Horizonte/MG",
    tamanho: "P",
    sexo: "Male",
    descricao:
      "Olá! Meu nome é Billy e estou aqui há 2 anos esperando uma família adotiva. Sou dócil, mas infelizmente nasci sem uma das minhas pernas, por isso preciso de ajuda especial",
  },
  {
    id: 6,
    imagem: "/images/Animais/dog2.jpg",
    nome: "Pluto",
    tempo: "0,5 anos",
    local: "Belo Horizonte/MG",
    tamanho: "P",
    sexo: "Female",
    descricao:
      "Olá! Meu nome é Billy e estou aqui há 2 anos esperando uma família adotiva. Sou dócil, mas infelizmente nasci sem uma das minhas pernas, por isso preciso de ajuda especial",
  },
  {
    id: 7,
    imagem: "/images/Animais/dog2.jpg",
    nome: "Pluto",
    tempo: "0,5 anos",
    local: "Belo Horizonte/MG",
    tamanho: "P",
    sexo: "Female",
    descricao:
      "Olá! Meu nome é Billy e estou aqui há 2 anos esperando uma família adotiva. Sou dócil, mas infelizmente nasci sem uma das minhas pernas, por isso preciso de ajuda especial",
  },
  {
    id: 8,
    imagem: "/images/Animais/dog2.jpg",
    nome: "Pluto",
    tempo: "0,5 anos",
    local: "Belo Horizonte/MG",
    tamanho: "P",
    sexo: "Female",
    descricao:
      "Olá! Meu nome é Billy e estou aqui há 2 anos esperando uma família adotiva. Sou dócil, mas infelizmente nasci sem uma das minhas pernas, por isso preciso de ajuda especial",
  },
  {
    id: 9,
    imagem: "/images/Animais/dog2.jpg",
    nome: "Pluto",
    tempo: "0,5 anos",
    local: "Belo Horizonte/MG",
    tamanho: "P",
    sexo: "Female",
    descricao:
      "Olá! Meu nome é Billy e estou aqui há 2 anos esperando uma família adotiva. Sou dócil, mas infelizmente nasci sem uma das minhas pernas, por isso preciso de ajuda especial",
  },
];

function Adote_ja() {
  return (
    <div className="background_Image_Adote_ja">
      <div className="marketplace">
        {animais.map((animal) => (
          <Produto key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
}

export default Adote_ja;

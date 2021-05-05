import React, { useState } from "react";
import "./Adocao_animais.css";
import ComponenteAdocao from "../../Componentes/ComponenteAdocao";

const animais = [
  {
    id: 1,
    imagem: "/images/dog11.jpeg",
    nome: "Billy",
    local: "Belo Horizonte/MG",
    tamanho: "P",
    sexo: "Male",
  },

  {
    id: 2,
    imagem: "/images/dog10.jpg",
    nome: "Pink",
    local: "Itabira/MG",
    tamanho: "M",
    sexo: "Female",
  },

  {
    id: 3,
    imagem: "/images/dog11.jpeg",
    nome: "Toby",
    local: "Ponte Nova/MG",
    tamanho: "P",
    sexo: "Male",
  },

  {
    id: 4,
    imagem: "/images/dog12.jpg",
    nome: "Pretinha",
    local: "Ponte Nova/MG",
    tamanho: "P",
    sexo: "Female",
  },

  {
    id: 4,
    imagem: "/images/dog10.jpg",
    nome: "Pretinha",
    local: "Ponte Nova/MG",
    tamanho: "P",
    sexo: "Female",
  },

  {
    id: 5,
    imagem: "/images/dog12.jpg",
    nome: "Pretinha",
    local: "Ponte Nova/MG",
    tamanho: "P",
    sexo: "Female",
  },

  {
    id: 6,
    imagem: "/images/dog10.jpg",
    nome: "Pretinha",
    local: "Ponte Nova/MG",
    tamanho: "P",
    sexo: "Female",
  },

  {
    id: 7,
    imagem: "/images/dog11.jpeg",
    nome: "Pretinha",
    local: "Ponte Nova/MG",
    tamanho: "P",
    sexo: "Female",
  },
];

function Adocao_animais() {
  return (
    <div className="pai_AdocaoAnimais">
      <div className="base_AdocaoAnimais">
        {animais.map((animal) => (
          <ComponenteAdocao key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
}

export default Adocao_animais;

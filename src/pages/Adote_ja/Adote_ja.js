import React from "react";
import "./Adote.css";
import Produto from "../../Componentes/Card_Adote_ja";
import { Card, ListGroup } from "react-bootstrap";

const animais = [
    {
        id: 1,
        imagem: "/images/dog1.png",
        nome: "Billy",
        tempo: "2 anos",
        local: "Belo Horizonte/MG",
        tamanho: "P",
        sexo: "Male",
    },
    {
        id: 2,
        imagem: "/images/dog2.jpg",
        nome: "Pluto",
        tempo: "2 anos",
        local: "Belo Horizonte/MG",
        tamanho: "P",
        sexo: "Female",

    },
    {
        id: 3,
        imagem: "/images/dog1.png",
        nome: "Billy",
        tempo: "2 anos",
        local: "Belo Horizonte/MG",
        tamanho: "P",
        sexo: "Male",

    },
    {
        id: 4,
        imagem: "/images/dog2.jpg",
        nome: "Pluto",
        tempo: "2 anos",
        local: "Belo Horizonte/MG",
        tamanho: "P",
        sexo: "Female",

    },
    {
        id: 5,
        imagem: "/images/dog1.png",
        nome: "Billy",
        tempo: "3 anos",
        local: "Belo Horizonte/MG",
        tamanho: "P",
        sexo: "Male",

    },
    {
        id: 6,
        imagem: "/images/dog2.jpg",
        nome: "Pluto",
        tempo: "0,5 anos",
        local: "Belo Horizonte/MG",
        tamanho: "P",
        sexo: "Female",

    },
];

function Adote_ja() {
    return (
        <div className="marketplace">
            {animais.map((animal) => (
                <Produto key={animal.id} animal={animal} />
            ))}
        </div>

    );
}

export default Adote_ja;
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
    },
    {
        id: 2,
        imagem: "/images/dog2.jpg",
        nome: "Pluto",
        tempo: "2 anos",
    },
    {
        id: 3,
        imagem: "/images/dog1.png",
        nome: "Billy",
        tempo: "2 anos",
    },
    {
        id: 4,
        imagem: "/images/dog2.jpg",
        nome: "Pluto",
        tempo: "2 anos",
    },
    {
        id: 5,
        imagem: "/images/dog1.png",
        nome: "Billy",
        tempo: "3 anos",
    },
    {
        id: 6,
        imagem: "/images/dog2.jpg",
        nome: "Pluto",
        tempo: "0,5 anos",
    },
];

function Adote_ja() {
    return (
        <div className="noteContainer">
            {animais.map((animal) => (
                <Produto key={animal.id} animal={animal} />
            ))}
        </div>

    );
}

export default Adote_ja;
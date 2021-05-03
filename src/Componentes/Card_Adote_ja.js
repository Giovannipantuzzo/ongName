import React from "react"
import "./componentes.css"
import { Card } from "react-bootstrap";
import { BiCurrentLocation } from 'react-icons/bi';

function Produto({ animal }) {
    return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Img variant="top" src={animal.imagem} alt="Exemplo" />
                    <Card.Title align="center"> Adote {animal.nome}</Card.Title>
                    <Card.Text align="center">Tempo de abrigo: {animal.tempo}</Card.Text>
                    <BiCurrentLocation />
                </Card.Body>
            </Card>
    );
}


export default Produto;


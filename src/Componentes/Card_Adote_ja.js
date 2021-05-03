import React from "react"
import "./componentes.css"
import { Card } from "react-bootstrap";
import { BiCurrentLocation, BiMaleSign, BiFemaleSign } from 'react-icons/bi';
import { useHistory } from "react-router";

function Produto({ animal }) {

    const history = useHistory();
    function Sexo() {
        if (animal.sexo === "Male") return <BiMaleSign />;

        else return <BiFemaleSign />
    }
    function telaAnimal() {
        history.push("animal");
    }

    return (
        <Card style={{ width: '18rem', cursor: "pointer" }} onClick={() => telaAnimal()}>
            <Card.Body>
                <Card.Img variant="top" src={animal.imagem} alt="Exemplo" />
                <Card.Title align="center"> Adote {animal.nome}</Card.Title>
                <Card.Text align="center">Tempo de abrigo: {animal.tempo}</Card.Text>
                <div className="infoRow">
                <p className="Cidade">
                    <BiCurrentLocation />
                    {animal.local}
                </p>
                <div className="Sexo">
                    <p>{animal.tamanho} |</p>
                    {Sexo()}
                </div>
                </div>

            </Card.Body>
        </Card >
    );
}


export default Produto;


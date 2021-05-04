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
        <Card bg={'light'} style={{ width: '18rem', cursor: "pointer" }} onClick={() => telaAnimal()}>
            <Card.Body style={{ padding: 0 }}>
                <Card.Img variant="top" src={animal.imagem} alt="Exemplo" />
                <div className="Border">
                    <Card.Title align="center"> Adote {animal.nome}</Card.Title>
                    <Card.Text align="center">Tempo de abrigo: {animal.tempo}</Card.Text>
                    <div className="infoRow">
                        <p className="Cidade">
                            <BiCurrentLocation />
                            {animal.local}
                        </p>
                        <div className="Sexo" >
                            <p>{animal.tamanho} |</p>
                            {Sexo()}
                        </div>
                    </div>
                    <Card.Text align="center">{animal.descricao}</Card.Text>
                </div>
            </Card.Body>
        </Card >
    );
}


export default Produto;


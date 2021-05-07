import React from "react";
import "./Animal.css";
import Figure from "react-bootstrap/Figure";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Animal() {
  return (
    <>
      <div className="divPai">
        <div className="containerAnimal">
          <div className="itemAnimal">
            <div className="divImageAnimal">
              <Figure>
                <Figure.Image
                  style={{
                    alignItems: "center",
                    width: "13rem",
                    borderRadius: "0.5rem",
                  }}
                  alt="171x180"
                  src="./images/dogHome1.png"
                />
              </Figure>
            </div>
            <div className="divImageAnimal">
              <Figure>
                <Figure.Image
                  style={{
                    alignItems: "center",
                    width: "13rem",
                    borderRadius: "0.5rem",
                  }}
                  alt="171x180"
                  src="./images/dogHome1.png"
                />
              </Figure>
            </div>
            <div className="divImageAnimal">
              <Figure>
                <Figure.Image
                  style={{
                    alignItems: "center",
                    width: "13rem",
                    borderRadius: "0.5rem",
                  }}
                  alt="171x180"
                  src="./images/dogHome1.png"
                />
              </Figure>
            </div>
            <div className="divImageAnimal">
              <Figure>
                <Figure.Image
                  style={{
                    alignItems: "center",
                    width: "13rem",
                    borderRadius: "0.5rem",
                  }}
                  alt="171x180"
                  src="./images/dogHome1.png"
                />
              </Figure>
            </div>
          </div>
          <div className="imagemCentral">
            <Figure>
              <Figure.Image
                style={{
                  position: "top",
                  width: "30rem",
                  borderRadius: "0.5rem",
                }}
                alt="171x180"
                src="./images/dogHome1.png"
              />
            </Figure>
          </div>
        </div>
        <div className="containerLateral">
          <Card>
            <Card.Body>
              <Card.Title style={{ fontSize: "4rem", fontFamily: "Roboto" }}>
                Bile, 2 anos
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Belo Horizonte
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                Vira lata
              </Card.Subtitle>
              <p className="paragrafoAnimal">
                Olá! Meu nome é Billie, tenho 2 anos e estou a procura de um
                novo lar. Sou muito dócil, brincalhão, e adoro passear. Perdi
                uma perna quando era bebê, mas isso não me impede de brincar
                bastante. A ONG me encontrou ainda novinho, tinha apenas 4
                meses, estava bem magrinho e desnutrido.
              </p>
            </Card.Body>
          </Card>
          <div className="buttonAdote">
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
            >
              Adote agora
            </Button>
          </div>
        </div>
      </div>
      <div className="paiCarrosselComentario">
        <div className="carrosselAnimal"></div>
        <div className="comentariosAnimal">
          <div className="tituloComentario">
            <p>
              <b>Comentários</b>
            </p>
          </div>
          <div className="comentarioFuncionario">
            <div className="perfilComentario">
              <img src="./images/tonyStark.png" className="imagePerfil" />
            </div>
            <div className="textoComentario">
              <p>
                <u>
                  <b>Tony Stark:</b>
                </u>{" "}
                Lindo cachorro dócil e brincalhão, necessita de cuidadose
                especiais pela dificultade de andar.
              </p>
            </div>
          </div>
          <div className="comentarioFuncionario">
            <div className="perfilComentario">
              <img src="./images/juliette.png" className="imagePerfil" />
            </div>
            <div className="textoComentario">
              <p>
                <u>
                  <b>Juliette:</b>
                </u>{" "}
                Billie é maravilhoso, porém meio arrisco, sempre desconfiado.
              </p>
            </div>
          </div>
          <div className="comentarioFuncionario">
            <div className="perfilComentario">
              <img src="./images/gilberto.png" className="imagePerfil" />
            </div>
            <div className="textoComentario">
              <p>
                <u>
                  <b>Gilberto:</b>
                </u>{" "}
                Billie é um cãozinho especial, com muito amor para dar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Animal;

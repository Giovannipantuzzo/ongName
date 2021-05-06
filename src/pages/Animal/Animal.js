import React from "react";
import './Animal.css'
import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card'

function Animal() {
    return(
        <>
        <div className="divPai">
            <div className="containerAnimal">
                <div className="itemAnimal">
                    <Figure>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="171x180"
                            src="./images/dogHome1.png"
                        />
                    </Figure>
                    <Figure>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="171x180"
                            src="./images/dogHome1.png"
                        />
                    </Figure>
                    <Figure>
                        <Figure.Image
                            alt="171x180"
                            src="./images/dogHome1.png"
                        />
                    </Figure>
                    <Figure>
                        <Figure.Image
                            alt="171x180"
                            src="./images/dogHome1.png"
                        />
                    </Figure>
                </div> 
                <div className="imagemCentral">
                <Figure>
                        <Figure.Image style={{position: "top",width: "30rem"}}
                            
                            alt="171x180"
                            src="./images/dogHome1.png"
                        />
                    </Figure>
                </div>
                    
            </div>
            <div className="containerLateral">
                <Card >
                    <Card.Body>
                        <Card.Title>Bile</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Belo Horizonte</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                    </Card>
            </div>
        </div>
            
        </>
    );
}

export default Animal;
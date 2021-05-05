import React from "react";
import { useHistory } from "react-router-dom";
import {
    AppBar,
    Toolbar,
 } from "@material-ui/core";
 import { Carousel } from "react-bootstrap";
 import Card from 'react-bootstrap/Card';
 import "./Home.css";


function Home() {
    const history = useHistory();

    return(
        <div>
            <AppBar position="static">
                <Toolbar style={{ backgroundColor: "yellow" }}>
                        <img className="logo" src="/images/Logo.png" alt="Logo"></img>
                        <button className="adocao" onClick={() => {
                            history.push("adocao_animal");
                        }}>
                            Adoção de animais
                        </button>
                        <button onClick={() => {
                            history.push("adote-ja");
                        }}>
                            Adote já
                        </button>
                        <button onClick={() => {
                            history.push("login");
                        }}>
                            Login
                        </button>
                        <button onClick={() => {
                            history.push("cadastro");
                        }}>
                            Cadastre-se
                        </button>
                </Toolbar>
            </AppBar>
            
            <Carousel fade >
                <Carousel.Item style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                    <img
                    className="d-block w-100"
                    src="./images/dogHome1.png"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <Card.Text>
                        </Card.Text>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="./images/dogHome2.png"
                    alt="Second slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="./images/dogHome3.png"
                    alt="Third slide"
                    />
                     <Carousel.Caption>
                        <Card.Text>
                        
                        </Card.Text>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
        </div>
        
    );
}

export default Home;
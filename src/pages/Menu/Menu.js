import React from "react";
import { useHistory } from "react-router-dom";
import {
    AppBar,
    Toolbar,
 } from "@material-ui/core";
 import "./Menu.css";

function Menu() {
    const history = useHistory();

    return(
        <div className="tudo">               
               <AppBar position="static">
                <Toolbar className="mae" style={{ backgroundColor: "#EDFE26", height: "6rem"}}>
                        <img style={{ cursor: "pointer" }} className="logo" src="/images/Logo.png" alt="Logo" onClick={() => {
                                history.push("home");
                            }}></img>
                        <div className="buttonsSpace1">
                            <button className="adocao" onClick={() => {
                                history.push("adocao_animal");
                            }}>
                                Adoção de animais
                            </button>
                            <button className="adote" onClick={() => {
                                history.push("adote-ja");
                            }}>
                                Adote já
                            </button>
                        </div>
                        <div className="buttonsSpace2">
                            <button className="Login" onClick={() => {
                                history.push("login");
                            }}>
                                Login</button>{' '}
                            <button className="cadastre" onClick={() => {
                                history.push("cadastro");
                            }}>
                                Cadastre-se</button>{' '}
                        </div>
                </Toolbar>
            </AppBar>
        </div>
    );
    
}

export default Menu;
import React from "react";
import { useHistory } from "react-router-dom";
import {
    AppBar,
    Toolbar,
 } from "@material-ui/core";

function Home() {
    const history = useHistory();

    return(
        <div>
            <AppBar position="static">
                <Toolbar className="toolBarConfig">
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
          
        </div>
    )
}

export default Home;
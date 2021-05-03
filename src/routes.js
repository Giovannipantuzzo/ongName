import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Adocao_animais from "./pages/Adocao_animais";
import Adote_ja from "./pages/Adote_ja";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Animal from "./pages/Animal";
import Perfil from "./pages/Perfil";
import Menu from "./pages/Menu";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/home" component={Home} />
        <Route path="/adocao_animais" component={Adocao_animais} />
        <Route path="/adote_ja" component={Adote_ja} />
        <Route path="/animal" component={Animal} />
        <Route path="/perfil" component={Perfil} />
        <Route path="/temp" component={Menu} />

      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

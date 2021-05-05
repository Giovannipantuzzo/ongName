import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
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
      <Menu>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/cadastro" component={Cadastro} />
          <Route exact path="/adocao_animais" component={Adocao_animais} />
          <Route exact path="/adote_ja" component={Adote_ja} />
          <Route exact path="/animal" component={Animal} />
          <Route exact path="/perfil" component={Perfil} />
          <Route exact path="/temp" component={Menu} />
          <Route
            path="*"
            exact={true}
            component={() => <Redirect to="/home" />}
          />
        </Switch>
      </Menu>
    </BrowserRouter>
  );
}

export default Routes;

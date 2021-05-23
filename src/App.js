import React from "react";
import Routes from "./routes";
import NameProvider from "./Componentes/Context/MenuName";
import Cadastro from "./pages/Cadastro";
import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";

function App() {
  return (
    <NameProvider>
      <Routes>
        <Cadastro />
      </Routes>
    </NameProvider>
  );
}

export default App;

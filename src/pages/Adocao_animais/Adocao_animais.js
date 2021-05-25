import React from "react";
import "./Adocao_animais.css";
import ComponenteAdocao from "../../Componentes/ComponenteAdocao";
import animais from "../../Componentes/AnimaisReais";

function Adocao_animais() {
  return (
    <div className="pai_AdocaoAnimais">
      <div className="base_AdocaoAnimais">
        {animais.map((animal) => (
          <ComponenteAdocao key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
}

export default Adocao_animais;

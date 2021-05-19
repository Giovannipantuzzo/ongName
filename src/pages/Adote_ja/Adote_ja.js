import React from "react";
import "./Adote.css";
import Produto from "../../Componentes/Card_Adote_ja";
import AnimaisAdoteJa from "../../Componentes/AnimaisAdoteJa";

function Adote_ja() {
  return (
    <div>
      <div className="HeaderAdoteJa">
        <p className="TítuloAdoteJa">Adote Já</p>
        <p className="AdoteJaDescription">
          Nessa página, você terá acesso aos nossos animais mais velhos, ou
          seja, aqueles que estão há mais tempo esperando uma nova família. Se
          quer escolher um novo amiguinho, comece por aqui ! ! !
        </p>
      </div>
      <div className="background_Image_Adote_ja">
        <div className="marketplace">
          {AnimaisAdoteJa.map((animal) => (
            <Produto key={animal.id} animal={animal} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Adote_ja;

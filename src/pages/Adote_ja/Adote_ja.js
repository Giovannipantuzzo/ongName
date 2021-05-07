import React from "react";
import "./Adote.css";
import Produto from "../../Componentes/Card_Adote_ja";

const animais = [
  {
    id: 1,
    imagem: "/images/Animais/animal1-sarabi.jpg",
    nome: "Sarabi",
    tempo: "1 ano",
    local: "Curitiba/PR",
    tamanho: "M",
    sexo: "Female",
    descricao:
      " Super carinhosa, boazinha, companheira e amorosa. Foi resgatada com seus filhotes e, hoje aguarda pela oportunidade da adoção. Se da bem com outros cães.",
    textoCompleto: "",
    Raca: "Não Definida",
  },
  {
    id: 2,
    imagem: "/images/Animais/animal2-Milkshake.jpg",
    nome: "Milkshake",
    tempo: "2 anos",
    local: "São Paulo/SP",
    tamanho: "M",
    sexo: "Male",
    descricao:
      " Sou super carinhoso, boazinho, companheiro e amoroso. Fui resgatado com seus filhotes e, hoje aguardo pela oportunidade da adoção. Me dou bem com outros cães.",
    Raca: "Não Definida",
  },
  {
    id: 3,
    imagem: "/images/Animais/animal3-Dominique.jpg",
    nome: "Dominique",
    tempo: "1 ano",
    local: "Belo Horizonte/MG",
    tamanho: "P",
    sexo: "Female",
    descricao:
      "Sou um pouco assustada de início, mas logo me acostumo. Gosto muito de brincar com bolinhas e sempre fico com o meu dono",
    Raca: "Não Definida",
  },
  {
    id: 4,
    imagem: "/images/Animais/Animal4-Joao.jpg",
    nome: "Joao",
    tempo: "1 ano",
    local: "Rio de Janeiro/RJ",
    tamanho: "M",
    sexo: "Male",
    descricao:
      "Sou um cãozinho de porte médio muito dócil, brincalhão e sociável com pessoas e outros animais. Agora busco uma casa, tenho certeza que não irá se arrepender",
    Raca: "Não Definida",
  },
  {
    id: 5,
    imagem: "/images/Animais/Animal5-Billy.jpeg",
    nome: "Billy",
    tempo: "3 anos",
    local: "Belo Horizonte/MG",
    tamanho: "M",
    sexo: "Male",
    descricao:
      "Olá! Meu nome é Billy e estou aqui há 2 anos esperando uma família adotiva. Sou dócil, mas infelizmente nasci sem uma das minhas pernas, por isso preciso de ajuda especial",
    Raca: "Não Definida",
  },
  {
    id: 6,
    imagem: "/images/Animais/Animal6-Florzinha.jpg",
    nome: "Florzinha",
    tempo: "1.5 ano",
    local: "Ipatinga/MG",
    tamanho: "P",
    sexo: "Female",
    descricao:
      "Oi, eu sou a florzinha, um animal muito especial. Nasci com deficiência nas patas das frentes e preciso de usar um apoio para andar. Apesar disso, gosto muito de correr e brincar com meus amigos.",
    Raca: "Não Definida",
  },
  {
    id: 7,
    imagem: "/images/Animais/Animal7-pink.jpg",
    nome: "Pink",
    tempo: "3 anos",
    local: "Aracaju/SE",
    tamanho: "G",
    sexo: "M",
    descricao:
      "Sim, eu sou rosa. Meu dono me pintou quando eu era só um bebê e essa tinta nunca mais saiu e por isso preciso fazer tratamento de pele, que é um pouco caro. Gosto muito de correr atrás de uma bola e sou muito amigável.",
    Raca: "Não Definida",
  },
  {
    id: 8,
    imagem: "/images/Animais/Animal8-Tobias.jpg",
    nome: "Tobias",
    tempo: "4 anos",
    local: "Belém/PA",
    tamanho: "M",
    sexo: "Female",
    descricao:
      "Sou um gatinho bem gordinho que é muito dócil, brincalhão, mas não muito sociável com pessoas e outros animais, por isso gosto de ficar no meu cantinho. Busco uma casa há algum tempo, tenho certeza que não irá se arrepender",
    Raca: "Não Definida",
  },
  {
    id: 9,
    imagem: "/images/Animais/animal9-Bob.jpeg",
    nome: "Bob",
    tempo: "2 anos",
    local: "Betim/MG",
    tamanho: "P",
    sexo: "Male",
    descricao:
      "Como um bom bulldog, gosto de ficar deitado o dia todo e por isso, não darei muito trabalho a você. Sou muito dócil e adoro um carinho. Espero que você goste de mim.",
    Raca: "Bulldog",
  },
];

function Adote_ja() {
  return (
    <div className="background_Image_Adote_ja">
      <div className="marketplace">
        {animais.map((animal) => (
          <Produto key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
}

export default Adote_ja;

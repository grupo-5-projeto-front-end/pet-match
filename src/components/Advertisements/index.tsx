import React from "react";
import { StyledAside } from "./style";

export const Advertisements = () => {
  const patronage = [
    {
      name: "ONLY PETS",
      descriptions: "para adoção de novos pets",
      type:"Parceiro oficial para adoção de amiguinhos"
    },
    {
      name: "Petshop DG",
      descriptions: "Melhor banho e tosa do seu estado ",
      type:"Parceiro oficial cuidar do se pet"
    },
    {
      name: "Roupinhas para seu pet",
      descriptions: "Roupinhas e acessórios para seu pet",
      type:"Melhores "
    },
  ];

  return (
    <StyledAside>
      <div className="sponsor">
        {
          patronage.map(element=>(
            <div>
            <div className="sponsor__text">
              <h4>Patrocinado</h4>
              <h3>{element.name}</h3>
            </div>
            <p>{element.descriptions}</p>
            <p>{element.type}</p>
          </div>
          ))
        }
      </div>
    </StyledAside>
  );
};

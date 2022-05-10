import React from "react";
import * as data from "../../../data.json";
import "./habilidades.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
library.add(faBrain);

export default function Habilidades() {
  const habilidades = data.habilidades;
  const listItems = habilidades.map((index) => {
    return <li key={index.id}>{index.nome}</li>;
  });
  return (
    <div className="habilidades">
      <h3>
        Habilidades e Competencias <FontAwesomeIcon icon="fa-solid fa-brain" />
      </h3>
      <ul>{listItems}</ul>
    </div>
  );
}

import React from "react";
import * as data from "../../../data.json";
import "./experiencias.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
library.add(faBriefcase);
export default function Experiencias() {
  const experiencias = data.experiencias;
  const listItems = experiencias.map((index) => {
    return (
      <li key={index.id} className="experiencia">
        <p className="cargo">
          {index.cargo} ({index.instituicao})
        </p>
        <p className="periodo">
          {index.inicio} - {index.termino}
        </p>
        <p className="descricao">{index.descricao}</p>
      </li>
    );
  });
  return (
    <div className="formacoes">
      <h3>
        <FontAwesomeIcon icon="fa-solid fa-briefcase" /> Experiências
      </h3>
      <ul>{listItems}</ul>
    </div>
  );
}

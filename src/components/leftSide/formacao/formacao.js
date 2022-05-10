import React from "react";
import * as data from "../../../data.json";
import "./formacao.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
library.add(faGraduationCap);
export default function Formacao() {
  const formacoes = data.formacao;
  const listItems = formacoes.map((index) => {
    return (
      <li key={index.id} className="formacao">
        {index.nivel} em{" "}
        <p>
          {index.titulo} - {index.instituicao}
        </p>
        <p>
          {index.inicio} a {index.termino}
        </p>
      </li>
    );
  });
  return (
    <div className="formacoes">
      <h3>
        Formações <FontAwesomeIcon icon="fa-solid fa-graduation-cap" />
      </h3>
      <ul>{listItems}</ul>
    </div>
  );
}

import React from "react";
import * as data from "../../../data.json";
import "./idiomas.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
library.add(faLanguage);
export default function Idiomas() {
  const idiomas = data.idiomas;
  const listItems = idiomas.map((index) => {
    return (
      <li key={index.id}>
        {index.idioma} - {index.nivel}
      </li>
    );
  });
  return (
    <div className="idiomas">
      <h3>
        Idiomas <FontAwesomeIcon icon="fa-solid fa-language" />
      </h3>
      <ul>{listItems}</ul>
    </div>
  );
}

import React from "react";
import "./leftSide.css";
import Formacao from "./formacao/formacao";
import Habilidades from "./habilidades/habilidades";
import Idiomas from "./idiomas/idiomas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGraduationCap,
  faBrain,
  faLanguage
} from "@fortawesome/free-solid-svg-icons";
library.add(faGraduationCap, faBrain, faLanguage);

export default function Leftside() {
  return (
    <div className="leftside">
      <div className="leftwrap">
        <Formacao />
        <Habilidades />
        <Idiomas />
      </div>
      <div className="lefticons">
        <FontAwesomeIcon icon="fa-solid fa-graduation-cap" />
        <FontAwesomeIcon icon="fa-solid fa-brain" />
        <FontAwesomeIcon icon="fa-solid fa-language" />
      </div>
    </div>
  );
}

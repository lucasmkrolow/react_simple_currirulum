import React from "react";
import "./rightSide.css";
import Experiencias from "./experiencias/experiencias";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGraduationCap,
  faBrain,
  faLanguage
} from "@fortawesome/free-solid-svg-icons";
library.add(faGraduationCap, faBrain, faLanguage);

export default function Rightside() {
  return (
    <div className="rightside">
      <div className="rightwrap">
        <Experiencias />
      </div>
      <div className="lefticons">
        <FontAwesomeIcon icon="fa-solid fa-graduation-cap" />
        <FontAwesomeIcon icon="fa-solid fa-brain" />
        <FontAwesomeIcon icon="fa-solid fa-language" />
      </div>
    </div>
  );
}

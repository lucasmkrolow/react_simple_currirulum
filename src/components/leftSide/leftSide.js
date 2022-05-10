import React from "react";
import "./leftSide.css";
import Formacao from "./formacao/formacao";
import Habilidades from "./habilidades/habilidades";
import Idiomas from "./idiomas/idiomas";

export default function Leftside() {
  return (
    <div className="leftside">
      <div className="leftwrap">
        <Formacao />
        <Habilidades />
        <Idiomas />
      </div>
    </div>
  );
}

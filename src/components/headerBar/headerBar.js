import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faPhone,
  faLocationPin,
  faCalendarDay
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./headerBar.css";
import profilePicture from "../../img/profilepic.jpeg";
import * as data from "../../data.json";

library.add(faEnvelope, faPhone, faLocationPin, faCalendarDay, faLinkedin, faGithub);

export default function Headerbar() {
  const calculate_age = (dob) => {
    const birthDate = new Date(dob);
    const difference = Date.now() - birthDate.getTime();
    const age = new Date(difference);

    return Math.abs(age.getUTCFullYear() - 1970);
  };
  return (
    <nav className="headerbar">
      <div className="titlebar">
        <span>Curriculo</span>
      </div>
      <div className="headerwrap">
        <div className="name">
          <span>{data.nome}</span>
        </div>
        <div className="picture">
          <img src={profilePicture} alt="Imagem do Perfil" />
        </div>
      </div>
      <div className="info">
        <div className="email">
          <label>
            <FontAwesomeIcon icon="fa-solid fa-envelope" />
          </label>
          <a rel="noreferrer" target="_blank" href={"mailto://" + data.email}>
            <span>{data.email}</span>
          </a>
        </div>
        <div className="telefone">
          <label>
            <FontAwesomeIcon icon="fa-solid fa-phone" />
          </label>
          <a rel="noreferrer" target="_blank" href={"tel://" + data.telefone}>
            <span>{data.telefone}</span>
          </a>
        </div>
        <div className="local">
          <label>
            <FontAwesomeIcon icon="fa-solid fa-location-pin" />
          </label>
          <span>{data.local}</span>
        </div>
        <div className="email">
          <label>
            <FontAwesomeIcon icon="fa-solid fa-calendar-day" />
          </label>
          <span>{calculate_age(data.nascimento)} anos</span>
        </div>
        <div className="linkedin">
          <label>
            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
          </label>
          <a rel="noreferrer" target="_blank" href={data.linkedin}>
            <span>{data.linkedin}</span>
          </a>
        </div>
        <div className="github">
          <label>
            <FontAwesomeIcon icon="fa-brands fa-github" /> 
          </label>
          <a rel="noreferrer" target="_blank" href={data.github}>
            <span>{data.github}</span>
          </a>
        </div>
        <div className="sobre">
          <span>{data.sobre}</span>
        </div>
      </div>
    </nav>
  );
}

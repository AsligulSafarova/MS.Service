import React from 'react';
import Form from "../Form";
import s from "./style.module.sass";


export default function Maps() {
  const style_map = {
    width: "550px",
    height: "350px",
    frameBorder: "0px",

  }
  return (
    <div className={s.container}>
      <h1> Kontaktieren Sie uns</h1>
      <p className={s.inf}> Lassen Sie uns über Ihr Projekte sprechen und gemeinsam Lösungen finden.</p>
      <div className={s.wrapper}>
        <div className={s.maps}>
          <div>
            <iframe
              style={style_map}
              src="https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&center=latitude,longitude&zoom=14" allowfullscreen>
            </iframe>
          </div>
          <div className={s.infos}>
            <h2>Mr.Service Dienstleistungen GmbH</h2>
            <h3>Donatusstraße 102, 50259 Pulheim</h3>
            <p>Telefon:+49 2234 4358805</p>
            <p>E-Mail:hallo@misterservice.koeln</p>
            <p>Web: www.misterservice.koeln</p>
          </div>
        </div>
      </div>
      <div className={s.forms}>
        <Form />
      </div>
    </div>

  )
}

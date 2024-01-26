import React from 'react';
import s from "./style.module.sass";
import logo from "../Header/images/logo.png";

export default function Footer() {
    return (
        <div className={s.container}>
            <div className={s.first_box}>
                <img src={logo} alt="logo" />
                <h1>© 2024 Mr.Service Dienstleistungen</h1>
            </div>
            <div className={s.second_box}>
                <p>Impressum</p>
                <p>Datenschutzerklärung</p>
                <p>Privatsphäre-Einstellungen ändern</p>
                <p>Historie der Privatsphäre-Einstellungen</p>
                <p>Einwilligungen widerrufen</p>
            </div>
            <div className={s.maps}>
                <h2>Mr.Service Dienstleistungen GmbH</h2>
                <h3>Donatusstraße 102, 50259 Pulheim</h3>
                <p>Telefon:<span>+49 2234 4358805</span> </p>
                <p>E-Mail: <a href="hallo@misterservice.koeln">hallo@misterservice.koeln</a></p>
                <p>Web:<span> www.misterservice.koeln</span></p>
            </div>

        </div>
    )
}

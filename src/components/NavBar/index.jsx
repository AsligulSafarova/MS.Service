import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareInstagram, faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faSquarePhoneFlip } from '@fortawesome/free-solid-svg-icons'
import s from "./style.module.sass";
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    const style = {
        color: "black",
    }
    const isActive = ({ isActive }) => isActive ? s.active : "";
    return (
        <nav>
            <div className={s.container}>
                <div className={s.kontacts}>
                    <p>Kontaktieren Sie uns: (+49) 2234 4358805</p>
                    <div className={s.mail}><a href="hallo@misterservice.koeln">hallo@misterservice.koeln</a></div>
                </div>
                <div className={s.allinfos}>
                    <NavLink to="/" className={isActive}>
                        <div className={s.msSercice}>
                            <h1 style={{ color: "black" }}><span >MR.</span>SERVICE</h1>
                            <p style={{ color: "black" }}>DIENSTLEISTUNGEN</p>
                        </div>
                    </NavLink>
                    <ul>
                        <li>Willkommen</li>
                        <li>Leistungen</li>
                        <NavLink style={style} to="kontact"><li>Über uns</li> </NavLink>
                        <li>Referenzen</li>
                        <NavLink to="kontact" style={style} className={isActive}><li>Kontakt</li></NavLink>
                    </ul>
                    <div className={s.icons}>
                        <p><FontAwesomeIcon icon={faSquareInstagram} /></p>
                        <p><FontAwesomeIcon icon={faEnvelope} /></p>
                        <p><FontAwesomeIcon icon={faSquarePhoneFlip} /></p>
                        <p><FontAwesomeIcon icon={faSquareWhatsapp} /></p>
                    </div>

                </div>

            </div>
        </nav>
    )
}

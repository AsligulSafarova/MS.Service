import React from 'react';
import s from "./style.module.sass";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faSquarePhoneFlip, faScrewdriverWrench, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import headerPhoto from "./images/photo_2.jpg";
import first_photo from "./images/photo_2.jpg";
import second_photo from "./images/mister.jpg";
import third_photo from "./images/photo_2.jpg";
import master from "./images/Ms.Service.jpg";
import fliesen_1 from "./images/fliesen-2.jpg"
import fliesen_3 from "./images/fliesen-3.jpg";
import fliesen_4 from "./images/fliesen-4.jpg"
import Button from '../UI/Button';
import Maps from '../Maps';

export default function Header() {
    return (
        <>
            <div className={s.container}>
                <div className={s.img}><img src={headerPhoto} alt="#" /></div>
                <div className={s.infos}>
                    <h1>Ihr verlässlicher Partner für Kabelverlegung, Modernisierung und Handwerkerservice</h1>
                    <div className={s.buttons}>
                        <Button className={s.buts}> <span><FontAwesomeIcon icon={faCalendarCheck} /> </span>Termin vereinbaren </Button>
                        <Button className={s.buts}> <span><FontAwesomeIcon icon={faSquarePhoneFlip} /></span> Termin vereinbaren </Button></div>
                </div>
                <div className={s.full_service}>
                    <h2>Full-Service-Dienstleistung für Industrie und Gewerbe </h2>
                    <p>Die Mr.Service Dienstleistungen GmbH ist Ihr Spezialist für industrielle und gewerbliche Kabelverlegung und Modernisierungsarbeiten. Unser Angebot richtet sich an Großkonzerne sowie renommierte Unternehmen aus den unterschiedlichsten Gewerbe- und Industriezweigen in Köln und den Nachbarregionen.</p>
                    <p>Unser Leistungsspektrum umfasst sämtliche Tätigkeiten rund um Kabelverlegung, Modernisierungsarbeiten und Handwerkerservice. Eine professionelle und zuverlässige Planung und Koordination ist dabei die Grundlage zur Erfüllung Ihrer Anforderungen – effizient und höchsten Qualitätsstandards entsprechend. </p>
                </div>
                <div className={s.lines}>
                    <div className={s.line_1}></div>
                    <div className={s.line_icon}><FontAwesomeIcon icon={faScrewdriverWrench} /></div>
                    <div className={s.line_2}></div>
                </div>
                <div className={s.lestungen}>
                    <h3>Unsere Leistungen im Überblick </h3>
                    <div className={s.lestung_img}>
                        <div>
                            <img src={first_photo} alt="#" />
                            <p>Kabelverlegung</p>
                        </div>
                        <div>
                            <img src={second_photo} alt="#" />
                            <p>Modernisierung</p>
                        </div>
                        <div>
                            <img src={third_photo} alt="#" />
                            <p>Handwerkerservice</p>
                        </div>
                    </div>
                </div>
                <div className={s.termins}>
                    <div className={s.termin_line_1}></div>
                    <div className={s.termin_buts}><Button className={s.termin_button}>Vereinbaren Sie einen Termin</Button></div>
                    <div className={s.termin_line_2}></div>
                </div>
                <div className={s.master_info}>
                    <div className={s.master_photo}>
                        <img src={master} alt="#" />
                    </div>
                    <div className={s.m_all_infos}>
                        <h4>Kompetent, zuverlässig und partnerschaftlich – darauf können Sie sich verlassen!</h4>
                        <p>Strikte Kunden- und Service-Orientierung bestimmen unser Denken und Handeln. Wir sind erst zufrieden, wenn Sie es sind! </p>
                        <p>Unser qualifiziertes, erfahrenes und eingespieltes Team legt Wert auf absolute Präzision und fachgerechte Umsetzung Ihrer Projekte. Unser Qualitätsversprechen hat oberste Priorität – deshalb vertrauen wir bei Einsatz des Equipments und der Materialien ausschließlich bekannten und bewährten Herstellern.</p>
                        <ul>
                            <li><FontAwesomeIcon icon={faScrewdriverWrench} /><span>5 Jahre Erfahrung und Branchenexpertise</span></li>
                            <li><FontAwesomeIcon icon={faScrewdriverWrench} /><span>Kurzfristige Projektaufnahme und zügige Auftragsabwicklung</span></li>
                            <li><FontAwesomeIcon icon={faScrewdriverWrench} /><span>Moderne, hochwertige Ausrüstung und qualifizierte Mitarbeiter</span></li>
                            <li><FontAwesomeIcon icon={faScrewdriverWrench} /><span>Umfassende Beratung und flexibler Service</span></li>
                            <li><FontAwesomeIcon icon={faScrewdriverWrench} /><span>Tiefes Kooperationsnetzwerk an Elektro- und Bauunternehmen</span></li>
                        </ul>
                    </div>
                </div>
                <div className={s.project}>
                    <h5>Unsere Projekte</h5>
                    <div className={s.sliders}>
                        <div className={s.left}><FontAwesomeIcon icon={faAngleLeft} /></div>
                        <div className={s.slide_1}>
                            <img src={fliesen_1} alt="#" />
                            <p>Bodenlegearbeiten & Terrassenbau</p>
                        </div>
                        <div className={s.slide_1}>
                            <img src={fliesen_3} alt="#" />
                            <p>Bodenlegearbeiten & Terrassenbau</p>
                        </div>
                        <div className={s.slide_1}>
                            <img src={fliesen_4} alt="#" />
                            <p>Bodenlegearbeiten & Terrassenbau</p>
                        </div>
                        <div className={s.right}><FontAwesomeIcon icon={faAngleRight} /></div>
                    </div>
                </div>

            </div>
            <Maps />
        </>
    )
}

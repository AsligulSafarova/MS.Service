import React from 'react';
import s from "./style.module.sass";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Button from '../UI/Button';

export default function Form() {
    const style = {
        width: "500px",
        padding: "15px",
    }
    return (
        <form className={s.form}>
            <div className={s.flex_input}>
                <div>Name:</div>
                <input type="text" className={s.inputs} />
                <div>E-Mail:</div>
                <input type="email" className={s.inputs} />
                <div>Telefon:</div>
                <input type="tel" className={s.inputs} />
            </div>
            <div className={s.betreff}>
                <p>Betreff:  </p>
                <input type="text" style={style} className={s.ben_inputs} />
            </div>
            <div className={s.textaria}>
                <p>Ihre Nachricht:  </p>
                <textarea rows="10" cols="70" name="comment" form="usrform">
                </textarea>
            </div>
            <Button className={s.absenden}><FontAwesomeIcon icon={faEnvelope} /> Anfrge absenden</Button>
        </form>)
}

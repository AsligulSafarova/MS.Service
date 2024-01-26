import React from 'react';
import s from "./style.module.sass"

export default function Button({ children, className, ...props }) {
    return (
        <button {...props} className={`${s.button} ${className}`}>{children}</button>
    )
}

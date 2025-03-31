import {FC} from "react";
import style from "./style.module.css"

export const Tags: FC = () => {
    return (
        <div className={style.subContainer}>
            <span className={style.smHeading}>Темы экскурсии:</span>
            <p className={style.text}>
                Какие темы вы затронете? История, архитектура, местные легенды или гастрономия?
                Укажите основные направления.
            </p>
            
        </div>
    );
};
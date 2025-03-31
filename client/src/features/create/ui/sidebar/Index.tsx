import {FC} from "react";
import style from "./style.module.css"

import {Location} from "./Location.tsx";
import {DatePicker} from "./DatePicker.tsx";
import {Duration} from "./Duration.tsx";
import {ByCity} from "./ByCity.tsx";
import {SubmitButton} from "./SubmitButton.tsx";

import {Accessibility} from "./Accessibility.tsx";
import {Format} from "./Format.tsx";
import {FormatBehavior} from "./FormatBehavior.tsx";

import {Price} from "./Price.tsx";
import {PriceForPerson} from "./PriceForPerson.tsx";

import {VK} from "./VK.tsx";
import {Telegram} from "./Telegram.tsx";
import {Phone} from "./Phone.tsx";
import {GroupCapacity} from "./GroupCapacity.tsx";
import {RouteLength} from "./RouteLength.tsx";

export const Index: FC = () => {
    return (
        <div className={style.container}>
            <div className={style.subContainer}>
                <span className={style.heading}>Конфигурация</span>
                <Accessibility/>
                <FormatBehavior/>
            </div>
            <div className={style.subContainer}>
                <span className={style.heading}>Локация</span>
                <Location/>
                <ByCity/>
                <RouteLength/>
            </div>
            <div className={style.subContainer}>
                <span className={style.heading}>Дата и время</span>
                <DatePicker/>
                <Duration/>
            </div>
            <div className={style.subContainer}>
                <span className={style.heading}>Цена</span>
                <Format/>
                <Price/>
                <PriceForPerson/>
                <GroupCapacity/>
            </div>
            <div className={style.subContainer}>
                <span className={style.heading}>Контакты</span>
                <VK/>
                <Telegram/>
                <Phone/>
            </div>
            <SubmitButton/>
        </div>
    );
};
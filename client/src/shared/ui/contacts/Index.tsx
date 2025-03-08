import {FC} from "react";
import style from "./style.module.css"
import {ContactButton, TelegramButton, VKButton} from "./buttons";

type ContactsProps = {
    link: string
    vk: string
    telegram: string
}

export const Index: FC<ContactsProps> = ({link, vk, telegram}) => {
    return (
        <div className={style.container}>
            <ContactButton link={link}/>
            <TelegramButton link={telegram}/>
            <VKButton link={vk}/>
        </div>
    );
};
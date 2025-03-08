import {FC} from "react";
import style from "./style.module.css"
import edit from "@/shared/assets/icons/edit.svg"

type EditProfileProps = {
    name: string
    avatar: string
}

export const Index: FC<EditProfileProps> = ({name, avatar}) => {
    return (
        <div className={style.container}>
            <div className={"flex flex-row gap-4 items-center"}>
                <img alt={"avatar"} width={40} height={40} src={avatar}/>
                <span className={style.name}>{name}</span>
            </div>
            <button>
                <img alt={"edit"} width={24} height={24} src={edit}/>
            </button>
        </div>
    );
};
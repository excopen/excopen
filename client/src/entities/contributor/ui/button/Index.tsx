import {FC} from "react";
import style from "./style.module.css"
import next from "@/shared/assets/icons/next-secondary.svg";
import {useNavigate} from "react-router-dom";
import {RouteNames} from "@/shared/types";

type ContributorButtonProps = {
    avatar: string
    name: string
}

export const Index: FC<ContributorButtonProps> = ({name, avatar}) => {

    const navigate = useNavigate()

    const clickHandler = () => {
        navigate(`/${RouteNames.CONTRIBUTOR}/${encodeURIComponent(name)}`)
    }

    return (
        <div onClick={clickHandler} className={style.container}>

            <img width={32} height={32} alt={"contributor"} src={avatar}/>

            <div className={style.desc}>
                <span className={style.name}>
                    {name}
                </span>
                <span>
                    Представитель команды гидов
                </span>
            </div>

            <img width={24} height={24} alt={"next"} src={next}/>

        </div>
    );
};
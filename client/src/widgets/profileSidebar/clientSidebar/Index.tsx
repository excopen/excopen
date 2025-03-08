import {FC} from "react";
import style from "./style.module.css";
import {Button, EditProfile, SidebarButton} from "@/shared/ui";
import {Link} from "react-router-dom";
import {RouteNames} from "@/shared/types";
import favourite from "@/shared/assets/icons/favourite-secondary.svg";

type SidebarProps = {
    name: string
    avatar: string
}

export const Index: FC<SidebarProps> = ({name, avatar}) => {
    return (
        <div className={style.container}>
            <EditProfile name={name} avatar={avatar}/>
            <Link className={"w-full lg:w-72"} to={`/${RouteNames.FAVOURITES}`}>
                <SidebarButton image={favourite} label={"Избранное"}/>
            </Link>
            <Button className={"w-full lg:w-72"}>Предложить экскурсию</Button>
        </div>
    );
};
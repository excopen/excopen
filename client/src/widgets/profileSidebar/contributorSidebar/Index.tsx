import {FC} from "react";
import style from "./style.module.css";
import {Button, EditProfile, SidebarButton} from "@/shared/ui";
import {Link} from "react-router-dom";
import {RouteNames} from "@/shared/types";
import favourite from "@/shared/assets/icons/favourite-secondary.svg";
import users from "@/shared/assets/icons/users.svg";

type SidebarProps = {
    name: string
    avatar: string
    description: string
}

export const Index: FC<SidebarProps> = ({name, description, avatar}) => {
    return (
        <div className={style.container}>
            <EditProfile
                name={name}
                avatar={avatar}
            />
            <div className={style.desc}>{description}</div>
            <Link className={"w-full lg:w-72"} to={`/${RouteNames.FAVOURITES}`}>
                <SidebarButton image={favourite} label={"Избранное"}/>
            </Link>
            <SidebarButton label={"Предложенные"} image={users}/>
            <Button className={"w-full lg:w-72"}>Предложить экскурсию</Button>
        </div>
    );
};
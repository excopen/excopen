import {FC, useState} from "react";
import style from "./style.module.css";
import {Button, UserName, SidebarButton} from "@/shared/ui";
import {Link} from "react-router-dom";
import {RouteNames} from "@/shared/types";
import favourite from "@/shared/assets/icons/favourite-secondary.svg";
import users from "@/shared/assets/icons/users.svg";
import {Edit} from "./edit"

type SidebarProps = {
    name: string
    avatar: string
    description: string
}

export const Index: FC<SidebarProps> = ({name, description, avatar}) => {

    const [isEdit, setIsEdit] = useState<boolean>(false)

    return (
        <div className={style.container}>

            <div className={!isEdit ? "block" : "hidden"}>
                <UserName
                    name={name}
                    avatar={avatar}
                    setIsEdit={setIsEdit}
                />
                <div className={style.desc}>{description}</div>
            </div>

            <Edit
                isEdit={isEdit}
                setIsEdit={setIsEdit}
                name={name}
                description={description}
            />

            <Link className={"w-full lg:w-72"} to={`/${RouteNames.FAVOURITES}`}>
                <SidebarButton image={favourite} label={"Избранное"}/>
            </Link>
            <SidebarButton label={"Предложенные"} image={users}/>
            <Button className={"w-full lg:w-72"}>Предложить экскурсию</Button>
        </div>
    );
};
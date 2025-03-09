import {FC, useState} from "react";
import style from "./style.module.css";
import {Button, UserName, SidebarButton} from "@/shared/ui";
import {Link} from "react-router-dom";
import {RouteNames} from "@/shared/types";
import favourite from "@/shared/assets/icons/favourite-secondary.svg";
import {Edit} from "./edit"

type SidebarProps = {
    name: string
    avatar: string
}

export const Index: FC<SidebarProps> = ({name, avatar}) => {

    const [isEdit, setIsEdit] = useState<boolean>(false)

    return (
        <div className={style.container}>

            <div className={!isEdit ? "block" : "hidden"}>
                <UserName
                    name={name}
                    avatar={avatar}
                    setIsEdit={setIsEdit}
                />
            </div>

            <Edit
                isEdit={isEdit}
                setIsEdit={setIsEdit}
                name={name}
            />

            <Link className={"w-full lg:w-72"} to={`/${RouteNames.FAVOURITES}`}>
                <SidebarButton image={favourite} label={"Избранное"}/>
            </Link>
            <Button className={"w-full lg:w-72"}>Предложить экскурсию</Button>
        </div>
    );
};
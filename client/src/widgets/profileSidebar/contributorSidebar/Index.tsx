import {FC} from "react";
import style from "./style.module.css";
import {UserName} from "@/shared/ui";
import {ProfileButtons} from "@/widgets/profileSidebar/buttons";
import {useUser} from "@/entities/user/model";
import {useAuthContext} from "@/features";

export const Index: FC = () => {

    const {user: userAuth} = useAuthContext()
    const {data: user} = useUser(userAuth?.id as number)

    return (
        <div className={style.container}>
            <UserName name={user.name} avatar={user.avatar}/>
            <div className={style.desc}>{user.description}</div>
            <ProfileButtons/>
        </div>
    );
};
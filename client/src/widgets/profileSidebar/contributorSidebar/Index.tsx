import {FC, useState} from "react";
import style from "./style.module.css";
import {UserName} from "@/shared/ui";
import {Edit} from "./edit"
import {ProfileButtons} from "@/widgets/profileSidebar/buttons";
import {useUser} from "@/entities/user/model";
import {useAuthContext} from "@/features";

export const Index: FC = () => {

    const {userId} = useAuthContext()
    const {data: user} = useUser(userId)

    const [isEdit, setIsEdit] = useState<boolean>(false)

    return (
        <div className={style.container}>

            <div className={!isEdit ? "block" : "hidden"}>
                <UserName
                    name={user.name}
                    avatar={user.avatar}
                    setIsEdit={setIsEdit}
                />
                <div className={style.desc}>{user.description}</div>
            </div>

            <Edit
                isEdit={isEdit}
                setIsEdit={setIsEdit}
                name={user.name}
                description={user.description as string}
            />

            <ProfileButtons/>

        </div>
    );
};
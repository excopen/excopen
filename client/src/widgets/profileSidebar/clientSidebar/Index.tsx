import {FC, useState} from "react";
import style from "./style.module.css";
import {UserName} from "@/shared/ui";
import {Edit} from "./edit"
import {ProfileButtons} from "@/widgets/profileSidebar/buttons";
import {useUser} from "@/entities/user/model";
import {useAuthContext} from "@/features";

export const Index: FC = () => {

    const {user: userAuth} = useAuthContext()
    const {data: user} = useUser(userAuth?.id as number)

    const [isEdit, setIsEdit] = useState<boolean>(false)

    return (
        <div className={style.container}>

            <div className={!isEdit ? "block" : "hidden"}>
                <UserName
                    name={user.name}
                    avatar={user.avatar}
                    setIsEdit={setIsEdit}
                />
            </div>

            <Edit
                isEdit={isEdit}
                setIsEdit={setIsEdit}
                name={user.name}
            />

            <ProfileButtons/>

        </div>
    );
};
import {FC} from "react";
import {Button} from "@/shared/ui";

import {useUserData} from "@/features/edit/hooks";
import {Field} from "./Field.tsx";
import {AvatarField} from "./AvatarField.tsx";

export const EditProfile: FC = () => {

    const {
        isContributor,
        user,
        uploadImage, updateName, updateSurname, updateInfo, load
    } = useUserData()

    return (
        <div className={"flex flex-col gap-4 bg-grayscale-0 rounded-2xl p-6 lg:w-[700px]"}>
            <AvatarField
                avatar={user.avatar}
                update={uploadImage}
            />
            <Field
                defaultValue={user.name}
                onChangeHandler={updateName}
                title={"Имя"}
                placeholder={"Введите имя"}
            />
            <Field
                defaultValue={user.surname}
                onChangeHandler={updateSurname}
                title={"Фамилия"}
                placeholder={"Введите фамилию"}
            />
            {
                isContributor &&
                <Field
                    defaultValue={user.info || ""}
                    onChangeHandler={updateInfo}
                    title={"Описание"}
                    placeholder={"Введите описание"}
                />
            }
            <Button className={"mt-12"} onClick={load}>
                Изменить данные
            </Button>
        </div>
    );
};
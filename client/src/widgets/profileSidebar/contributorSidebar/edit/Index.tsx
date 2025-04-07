import {FC, useState} from "react";
import {Button, ProfileInput} from "@/shared/ui";
import {useUpdateUser, useUser} from "@/entities/user/model";
import {useAuthContext} from "@/features";

type EditContributorProps = {
    name: string
    description: string
    isEdit: boolean
    setIsEdit: (value: boolean) => void
}

export const Index: FC<EditContributorProps> = ({name, description, isEdit, setIsEdit}) => {

    const {user: userAuth} = useAuthContext()
    const {data: user} = useUser(userAuth?.id as number)
    const {mutate} = useUpdateUser()

    const [newName, setNewName] = useState<string>(name)
    const [newDesc, setNewDesc] = useState<string>(description)

    const updateData = () => {
        mutate({...user, name: newName, description: newDesc})
        setIsEdit(false)
    }

    return (
        <div className={isEdit ? "flex flex-col w-full gap-4 pb-4" : "hidden"}>
            <span className={"text-xl text-grayscale-500 font-medium"}>Основное</span>
            <ProfileInput
                defaultValue={newName}
                onChangeHandler={setNewName}
                placeholder={"Введите имя"}
            />
            <ProfileInput
                type={"text"}
                defaultValue={newDesc}
                onChangeHandler={setNewDesc}
                placeholder={"Введите описание"}
            />
            <div className={"flex flex-col gap-2 pb-4"}>
                <Button onClick={updateData}>
                    Добавить
                </Button>
                <Button className={"flex justify-center"} variant={"secondary"} onClick={() => setIsEdit(false)}>
                    Отменить
                </Button>
            </div>
        </div>
    );
};
import {FC, useState} from "react";
import {Button, ProfileInput} from "@/shared/ui";
import {useUpdateUser, useUser} from "@/entities/user/model";
import {useAuthContext} from "@/features";

type EditClientProps = {
    name: string
    isEdit: boolean
    setIsEdit: (value: boolean) => void
}

export const Index: FC<EditClientProps> = ({name, isEdit, setIsEdit}) => {

    const {userId} = useAuthContext()
    const {data: user} = useUser(userId)

    const [newName, setNewName] = useState<string>(name)
    const {mutate} = useUpdateUser()

    const updateData = () => {
        mutate({...user, name: newName})
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
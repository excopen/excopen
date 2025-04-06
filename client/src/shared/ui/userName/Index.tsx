import React, {FC, useEffect, useState} from "react";
import style from "./style.module.css"
import edit from "@/shared/assets/icons/edit.svg"
import {formatName} from "@/shared/utills";
import {useUpdateUser, useUser} from "@/entities/user/model";
import {useAuthContext} from "@/features";
import defaultAvatar from "@/shared/assets/icons/avatar.svg"

type EditProfileProps = {
    name: string
    avatar: string
    setIsEdit: (value: boolean) => void
}

export const Index: FC<EditProfileProps> = ({name, avatar, setIsEdit}) => {

    const {userId} = useAuthContext()
    const {data: user} = useUser(userId)
    const {mutate} = useUpdateUser()

    const [selectedAvatar, setSelectedAvatar] = useState<string>(avatar)

    const [avatarUrl, setAvatarUrl] = useState<string | null>(null)

    useEffect(() => {
        setAvatarUrl(selectedAvatar)
    }, [selectedAvatar])

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            setSelectedAvatar(URL.createObjectURL(file))
            mutate({...user, avatar: URL.createObjectURL(file)})
        }
    }

    return (
        <div className={style.container}>
            <div className={"flex flex-row gap-4 items-center"}>
                <label className="cursor-pointer rounded-full bg-cover bg-center transition hover:opacity-80">
                    <img alt="avatar" width={40} height={40} src={avatarUrl || defaultAvatar}/>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                    />
                </label>
                <span className={style.name}>{formatName(name)}</span>
            </div>
            <button onClick={() => setIsEdit(true)}>
                <img
                    className={"hover:opacity-50 transition"}
                    alt={"edit"}
                    width={24}
                    height={24}
                    src={edit}
                />
            </button>
        </div>
    );
};
import {FC, useState} from "react";
import style from "./style.module.css"
import edit from "@/shared/assets/icons/edit.svg"

type EditProfileProps = {
    name: string
    avatar: string
    setIsEdit: (value: boolean) => void
}

export const Index: FC<EditProfileProps> = ({name, avatar, setIsEdit}) => {

    const [selectedAvatar, setSelectedAvatar] = useState(avatar)

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) setSelectedAvatar(URL.createObjectURL(file))
    }

    // TODO обновление аватара в профиле через хук

    return (
        <div className={style.container}>
            <div className={"flex flex-row gap-4 items-center"}>
                <label className="cursor-pointer rounded-full transition hover:opacity-80">
                    <img alt="avatar" width={40} height={40} src={selectedAvatar}/>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                    />
                </label>
                <span className={style.name}>{name}</span>
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
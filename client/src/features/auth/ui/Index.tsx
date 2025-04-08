import {KeySquare} from "lucide-react";
import {GoogleCredentialResponse, GoogleLogin} from "@react-oauth/google";
import {FC} from "react";
import s from "./style.module.css"

type AuthFormProps = {
    login: (response: GoogleCredentialResponse) => void
}

export const Index: FC<AuthFormProps> = ({login}) => {
    return (
        <div className={s.container}>
            <div className={s.desc}>
                <div className={s.item}>
                    <KeySquare width={40} height={40} className={"text-grayscale-500"}/>
                    <span className={s.heading}>Вход в личный кабинет</span>
                </div>
                <p className={s.text}>Войдите в свой Google аккаунт, чтобы использовать все функции приложения</p>
            </div>
            <GoogleLogin
                text={"signin"}
                onSuccess={login}
                onError={() => console.log("Google Login Error")}
            />
        </div>
    );
};
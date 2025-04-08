import {FC} from "react";
import s from "@/app/styles/pages.module.css"
import {GoogleCredentialResponse} from "@react-oauth/google";
import {AuthForm, useAuthContext} from "@/features";

export const AuthPage: FC = () => {

    const {login} = useAuthContext()
    const handleLogin = (response: GoogleCredentialResponse) => login({hint: response.credential})

    return (
        <div className={s.auth}>
            <AuthForm login={handleLogin}/>
        </div>
    );
};
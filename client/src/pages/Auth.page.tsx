import {FC} from "react";
import s from "@/app/styles/pages.module.css"
import {GoogleCredentialResponse} from "@react-oauth/google";
import {useAuthContext} from "@/features";
import {AuthForm} from "@/widgets";

export const AuthPage: FC = () => {

    const {login} = useAuthContext()
    const handleLogin = (response: GoogleCredentialResponse) => login({hint: response.credential})

    return (
        <div className={s.auth}>
            <AuthForm login={handleLogin}/>
        </div>
    );
};
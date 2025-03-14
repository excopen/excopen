import {FC} from "react";
import style from "./style.module.css"
import {Button} from "@/shared/ui";
import {LogIn} from "lucide-react";

export const Index: FC = () => {
    return (
        <div className={style.container}>
            <LogIn className={style.icon} height={48} width={48}/>
            <span className={style.heading}>
                Войдите или создайте аккаунт, чтобы использовать все функции
            </span>
            <Button className={style.button}>
                Войти
            </Button>
        </div>
    );
};
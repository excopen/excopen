import {FC} from "react";
import style from "@/widgets/onboarding/ui/reqs/styles/style.module.css";
import {Link} from "react-router-dom";
import {RouteNames} from "@/shared/types";
import {Button} from "@/shared/ui";

type ButtonsProps = {
    disabled: boolean
}

export const Buttons: FC<ButtonsProps> = ({disabled}) => {
    return (
        <div className={style.buttons}>
            <Link to={`/${RouteNames.MAIN}`}>
                <Button variant={"secondary"} size={"md"}>
                    Не интересно
                </Button>
            </Link>
            <Link to={`/${RouteNames.MAIN}`}>
                <Button disabled={disabled} size={"md"}>
                    Искать
                </Button>
            </Link>
        </div>
    );
};
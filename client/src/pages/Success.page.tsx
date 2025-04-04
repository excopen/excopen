import {FC} from "react";
import {Check} from "lucide-react";
import {Link} from "react-router-dom";
import {RouteNames} from "@/shared/types";
import {Button} from "@/shared/ui";

export const SuccessPage: FC = () => {
    return (
        <div className={"flex flex-col h-screen pt-44 gap-4 items-center"}>
            <Check height={80} width={80} className={"text-grayscale-500"}/>
            <h1 className={"text-2xl text-grayscale-500 font-semibold"}>
                Экскурсия отправлена на проверку!
            </h1>
            <p className={"text-xl text-grayscale-400 lg:w-2/5 text-center"}>
                Данные были отправлены на проверку, по завершению пришлем уведомление на вашу почту!
            </p>
            <Link to={`/${RouteNames.MAIN}`}>
                <Button>
                    Вернуться на главную
                </Button>
            </Link>
        </div>
    );
};
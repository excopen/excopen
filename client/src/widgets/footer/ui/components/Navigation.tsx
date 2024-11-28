import {Link} from "react-router-dom";
import {FC} from "react";

export const Navigation: FC = () => {
    return (
        <div className={"flex flex-wrap max-w-[500px] text-grayscale-500 text-xs gap-4"}>
            <Link to={""}>
                В помощь туристам
            </Link>
            <Link to={""}>
                Помощь для гидов
            </Link>
            <Link to={""}>
                Политика обработки персональных данных
            </Link>
            <Link to={""}>
                Маркетинговые акции
            </Link>
            <Link to={""}>
                Документы для партнеров
            </Link>
        </div>
    );
};
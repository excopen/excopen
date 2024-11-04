import {FC, ReactNode} from "react";
import {SearchParamsType} from "@/shared/types";
import {Link} from "react-router-dom";

type ButtonProps = {
    searchParams: SearchParamsType
    children: ReactNode
    path: string
}

const SearchButton: FC<ButtonProps> = ({searchParams, children, path}) => {

    const clickHandler = () => {
        // Работа с сущностью Tour
        console.log(searchParams) // вызвал searchParams чтобы Eslint не ругался :)
    }

    return (
        <Link onClick={clickHandler} to={`/${path}`}>
            {children}
        </Link>
    );
};

export default SearchButton;
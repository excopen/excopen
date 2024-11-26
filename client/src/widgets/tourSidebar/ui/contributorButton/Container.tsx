import {FC, ReactNode} from "react";
import {Link} from "react-router-dom";

type ContainerProps = {
    children: ReactNode
    link: string
}

export const Container: FC<ContainerProps> = ({children, link}) => {
    return (
        <Link className={"flex flex-row px-4 justify-between"} to={link}>
            {children}
        </Link>
    );
};
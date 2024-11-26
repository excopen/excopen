import {FC, ReactNode} from "react";

type ContainerProps = {
    children: ReactNode
}

export const Container: FC<ContainerProps> = ({children}) => {
    return (
        <header className={"flex flex-row justify-between"}>
            {children}
        </header>
    );
};
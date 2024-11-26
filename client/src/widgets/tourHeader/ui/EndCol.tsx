import {FC, ReactNode} from "react";

type EndColProps = {
    children: ReactNode
}

export const EndCol: FC<EndColProps> = ({children}) => {
    return (
        <header className={"flex flex-col gap-4"}>
            {children}
        </header>
    );
};
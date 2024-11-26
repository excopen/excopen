import {FC, ReactNode} from "react";

type StartColProps = {
    children: ReactNode
}

export const StartCol: FC<StartColProps> = ({children}) => {
    return (
        <header className={"flex flex-col w-full md:w-3/5 gap-4"}>
            {children}
        </header>
    );
};
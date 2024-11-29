import {FC, ReactNode} from "react";

type ContentProps = {
    children: ReactNode
}

export const Content: FC<ContentProps> = ({children}) => {
    return (
        <div className={"flex flex-col w-2/3"}>
            {children}
        </div>
    );
};
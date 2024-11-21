import {FC, ReactNode} from "react";

type ContainerProps = {
    children: ReactNode
}

export const Container: FC<ContainerProps> = ({children}) => {
    return (
        <div className={"flex flex-col text-center items-center gap-10 py-20 w-full"}>
            {children}
        </div>
    );
};
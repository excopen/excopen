import {FC, ReactNode} from "react";

type ContainerProps = {
    children: ReactNode
}

export const Container: FC<ContainerProps> = ({children}) => {
    return (
        <div className={"flex flex-col md:w-2/5 gap-4 py-4 px-12"}>
            {children}
        </div>
    );
};
import {FC, ReactNode} from "react";

type ContainerProps = {
    children: ReactNode
}

export const Container: FC<ContainerProps> = ({children}) => {
    return (
        <div className={"flex flex-col max-md:pt-4 gap-4 md:flex-row md:justify-between md:items-end"}>
            {children}
        </div>
    );
};
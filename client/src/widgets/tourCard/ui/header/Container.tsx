import {FC, ReactNode} from "react";

type ContainerProps = {
    children: ReactNode
}

export const Container: FC<ContainerProps> = ({children}) => {
    return (
        <div className={"w-full flex flex-row justify-between"}>
            {children}
        </div>
    );
};
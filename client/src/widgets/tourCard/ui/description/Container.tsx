import {FC, ReactNode} from "react";

type ContainerProps = {
    children: ReactNode
}

export const Container: FC<ContainerProps> = ({children}) => {
    return (
        <div className={"flex flex-row justify-between mt-4"}>
            {children}
        </div>
    );
};
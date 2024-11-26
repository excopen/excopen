import {FC, ReactNode} from "react";

type ContainerProps = {
    children: ReactNode
}

export const Container: FC<ContainerProps> = ({children}) => {
    return (
        <div className={"w-full bg-grayscale-0 rounded-2xl flex flex-col gap-6 overflow-hidden"}>
            {children}
        </div>
    );
};
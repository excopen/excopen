import {FC, ReactNode} from "react";

type ContainerProps = {
    children: ReactNode
}

export const Container: FC<ContainerProps> = ({children}) => {
    return (
        <div className={"flex flex-col lg:w-1/2 xl:w-3/5 gap-6 max-lg:order-last"}>
            {children}
        </div>
    );
};
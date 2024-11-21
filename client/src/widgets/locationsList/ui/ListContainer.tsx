import {FC, ReactNode} from "react";

type ListContainerProps = {
    children: ReactNode
}

export const ListContainer: FC<ListContainerProps> = ({children}) => {
    return (
        <div className={"flex flex-row justify-center flex-wrap gap-4 items-center lg:justify-between w-full"}>
            {children}
        </div>
    );
};
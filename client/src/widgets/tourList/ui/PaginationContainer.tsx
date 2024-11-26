import {FC, ReactNode} from "react";

type PaginationContainerProps = {
    children: ReactNode
}

export const PaginationContainer: FC<PaginationContainerProps> = ({children}) => {
    return (
        <div className={"flex justify-center"}>
            {children}
        </div>
    );
};
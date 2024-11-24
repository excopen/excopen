import {FC, ReactNode} from "react";

type ToursPageContainerProps = {
    children: ReactNode
}

export const ToursPageContainer: FC<ToursPageContainerProps> = ({children}) => {
    return (
        <div className={"flex flex-col xl:flex-row py-8 xl:py-16 gap-6"}>
            {children}
        </div>
    );
};
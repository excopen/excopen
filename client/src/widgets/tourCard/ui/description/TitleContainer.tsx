import {FC, ReactNode} from "react";

type TitleContainerProps = {
    children: ReactNode
}

export const TitleContainer: FC<TitleContainerProps> = ({children}) => {
    return (
        <div className={"flex flex-col gap-2 w-full md:w-2/3"}>
            {children}
        </div>
    );
};
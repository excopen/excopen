import {FC, ReactNode} from "react";

type ContentContainerProps = {
    children: ReactNode
}

export const ContentContainer: FC<ContentContainerProps> = ({children}) => {
    return (
        <div className={"flex flex-col px-8 pb-8"}>
            {children}
        </div>
    );
};
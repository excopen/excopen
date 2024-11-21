import {FC, ReactNode} from "react";

type HomePageContainerProps = {
    children: ReactNode
}

export const HomePageContainer: FC<HomePageContainerProps> = ({children}) => {
    return (
        <div className={"flex flex-col items-center"}>
            {children}
        </div>
    );
};
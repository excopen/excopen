import {FC, ReactNode} from "react";

type MainContainerProps = {
    children: ReactNode
}

export const MainContainer: FC<MainContainerProps> = ({children}) => {
    return (
        <main className={"flex flex-col padding"}>
            {children}
        </main>
    );
};
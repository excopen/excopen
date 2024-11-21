import {FC, ReactNode} from "react";

type HeaderContainerProps = {
    children: ReactNode
}

export const HeaderContainer: FC<HeaderContainerProps> = ({children}) => {
    return (
        <header className={"flex justify-between padding w-full h-14 items-center bg-grayscale-0"}>
            {children}
        </header>
    );
};
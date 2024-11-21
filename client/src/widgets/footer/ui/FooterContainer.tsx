import {FC, ReactNode} from "react";

type FooterContainerProps = {
    children: ReactNode
}

export const FooterContainer: FC<FooterContainerProps> = ({children}) => {
    return (
        <footer className={"w-full flex flex-col py-4"}>
            {children}
        </footer>
    );
};
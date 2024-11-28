import {FC, ReactNode} from "react";

type LayoutContainerProps = {
    children: ReactNode
}

export const LayoutContainer: FC<LayoutContainerProps> = ({children}) => {
    return (
        <div className={"w-full bg-grayscale-100"}>
            {children}
        </div>
    );
};
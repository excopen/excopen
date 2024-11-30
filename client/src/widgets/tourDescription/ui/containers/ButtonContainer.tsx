import {FC, ReactNode} from "react";

type ButtonContainerProps = {
    children: ReactNode
}

export const ButtonContainer: FC<ButtonContainerProps> = ({children}) => {
    return (
        <div className={"flex flex-row flex-wrap gap-4"}>
            {children}
        </div>
    );
};
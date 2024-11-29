import {FC, ReactNode} from "react";

type ButtonContainerProps = {
    children: ReactNode
}

export const ButtonContainer: FC<ButtonContainerProps> = ({children}) => {
    return (
        <div className={"flex flex-row gap-4"}>
            {children}
        </div>
    );
};
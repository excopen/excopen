import {FC, ReactNode} from "react";

type PriceContainerProps = {
    children: ReactNode
}

export const ButtonGroup: FC<PriceContainerProps> = ({children}) => {
    return (
        <div className={"flex flex-row gap-4"}>
            {children}
        </div>
    );
};
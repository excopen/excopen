import {FC, ReactNode} from "react";

type DescriptionProps = {
    children: ReactNode
}

export const Description: FC<DescriptionProps> = ({children}) => {
    return (
        <div className={"flex flex-col text-sm text-grayscale-400"}>
            {children}
        </div>
    );
};
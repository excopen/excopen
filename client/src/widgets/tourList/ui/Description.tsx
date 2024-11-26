import {FC, ReactNode} from "react";

type DescriptionProps = {
    children: ReactNode
}

export const Description: FC<DescriptionProps> = ({children}) => {
    return (
        <span className={"text-grayscale-500 text-sm"}>{children}</span>
    );
};
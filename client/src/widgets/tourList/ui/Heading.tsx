import {FC, ReactNode} from "react";

type HeadingProps = {
    children: ReactNode
}

export const Heading: FC<HeadingProps> = ({children}) => {
    return (
        <h1 className={"text-grayscale-500 text-4xl font-medium"}>
            {children}
        </h1>
    );
};
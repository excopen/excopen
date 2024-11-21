import {FC, ReactNode} from "react";

type HeadingProps = {
    children: ReactNode
}

export const Heading: FC<HeadingProps> = ({children}) => {
    return (
        <h2 className={"ext-grayscale-500 font-bold text-4xl"}>
            {children}
        </h2>
    );
};
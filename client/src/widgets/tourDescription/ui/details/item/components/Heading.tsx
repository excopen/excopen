import {FC} from "react";

type HeadingProps = {
    title: string
}

export const Heading: FC<HeadingProps> = ({title}) => {
    return (
        <span className={"text-sm"}>
            {title}
        </span>
    );
};
import {FC} from "react";

type HeadingProps = {
    value: string
}

export const Heading: FC<HeadingProps> = ({value}) => {
    return (
        <h2 className={"text-xl text-grayscale-500 font-medium"}>
            {value}
        </h2>
    );
};
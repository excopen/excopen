import {FC} from "react";

type TitleProps = {
    value: string
}

export const Title: FC<TitleProps> = ({value}) => {
    return (
        <h1 className={"font-medium text-4xl text-grayscale-500"}>
            {value}
        </h1>
    );
};
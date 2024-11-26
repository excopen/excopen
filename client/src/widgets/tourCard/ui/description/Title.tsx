import {FC} from "react";

type TitleProps = {
    value: string
}

export const Title: FC<TitleProps> = ({value}) => {
    return (
        <p className={"text-2xl text-grayscale-500 font-medium"}>
            {value}
        </p>
    );
};
import {FC} from "react";

type DescriptionProps = {
    value: string
}

export const Text: FC<DescriptionProps> = ({value}) => {
    return (
        <p className={"text-grayscale-400 text-base"}>
            {value}
        </p>
    );
};
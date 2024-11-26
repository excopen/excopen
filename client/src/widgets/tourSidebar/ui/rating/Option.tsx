import {FC} from "react";

type OptionProps = {
    option: string
}

export const Option: FC<OptionProps> = ({option}) => {
    return (
        <p className={"w-1/2 text-sm text-grayscale-400 font-medium"}>
            {option}
        </p>
    );
};
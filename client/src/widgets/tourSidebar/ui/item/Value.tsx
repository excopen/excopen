import {FC} from "react";

type ValueProps = {
    value: string | undefined
}

export const Value: FC<ValueProps> = ({value}) => {
    return (
        <p className={"text-sm text-grayscale-500"}>
            {value}
        </p>
    );
};
import {FC} from "react";

type ValueProps = {
    price: string
}

export const Value: FC<ValueProps> = ({price}) => {
    return (
        <span className={"text-2xl font-medium text-grayscale-500"}>
            {price} ₽
        </span>
    );
};
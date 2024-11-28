import {FC, ReactNode} from "react";

type CityProps = {
    city: ReactNode
}

export const City: FC<CityProps> = ({city}) => {
    return (
        <span className="text-xl font-medium">
            {city}
        </span>
    );
};
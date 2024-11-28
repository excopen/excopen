import {FC} from "react";

type CountryProps = {
    country: string
}

export const Country: FC<CountryProps> = ({country}) => {
    return (
        <span className="text-sm">
            {country}
        </span>
    );
};
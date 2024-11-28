import {FC} from "react";

type TourCountProps = {
    count: number
}

export const TourCount: FC<TourCountProps> = ({count}) => {
    return (
        <span className="text-sm font-medium">
            {count}+ экскурсий
        </span>
    );
};
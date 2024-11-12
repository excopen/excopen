import {FC} from 'react';
import {ITour} from "@/shared/types";
import {sortTours} from "@/features/sortTours/model";

type SortToursType = {
    tours: ITour[]
}

export const SortTours: FC<SortToursType> = ({tours}) => {

    const sortedTours = sortTours(tours, "price")
    console.log(sortedTours)

    return (
        <select>
        </select>
    );
};
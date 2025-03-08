import {FC, useState} from "react";
import {Header} from "./header";
import {ToursArray} from "@/shared/assets/tempData/ToursArray.ts";
import {useParams} from "react-router-dom";
import {TourCard} from "@/entities";
import {SortValues} from "@/shared/types/features";
import {ITour} from "@/shared/types";
import {sortByPrice, SortByPriceType, sortByRating} from "@/features";
import {TourPagination} from "@/shared/ui";

export const Index: FC = () => {

    const {location} = useParams<{location : string}>()
    const [visibleTours, setVisibleTours] = useState<number>(
        3
    )
    const [sortType, setSortType] = useState<string>(
        SortValues.FOR_CHEAP
    )

    let sortedTours: ITour[] = []

    if (sortType === SortValues.FOR_CHEAP) sortedTours = sortByPrice(ToursArray, SortByPriceType.ASCENDING)
    else if (sortType === SortValues.FOR_EXPENSIVE) sortedTours = sortByPrice(ToursArray, SortByPriceType.DESCENDING)
    else if (sortType === SortValues.FOR_RATING) sortedTours = sortByRating(ToursArray)

    return (
        <div className={"w-full flex flex-col gap-8"}>
            <Header city={location} count={888} sortType={sortType} setSortType={setSortType}/>
            {sortedTours.slice(0,visibleTours).map(tour => (
                <TourCard key={tour.id} tour={tour}/>
            ))}
            <TourPagination visiable={visibleTours} setVisible={setVisibleTours} maxLength={ToursArray.length}/>
        </div>
    );
};
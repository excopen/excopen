import {FC, useState} from "react";
import {useParams} from "react-router-dom";
import {TourCard, useTours} from "@/entities";
import {ITour, SortValues} from "@/shared/types";
import {sortByPrice, SortByPriceType, sortByRating, useSearchContext} from "@/features";
import {TourPagination} from "@/shared/ui";
import {Header} from "./header";

//TODO ВОПРОС

export const Index: FC = () => {

    const {context} = useSearchContext()
    const {data: tours} = useTours(context.searchParams)

    const {location} = useParams<{location : string}>()
    const [visibleTours, setVisibleTours] = useState<number>(
        3
    )

    let sortedTours: ITour[] = []
    const [sortType, setSortType] = useState<SortValues>(
        SortValues.FOR_CHEAP
    )

    if (Array.isArray(tours)) {
        if (sortType === SortValues.FOR_CHEAP) sortedTours = sortByPrice(tours, SortByPriceType.ASCENDING)
        else if (sortType === SortValues.FOR_EXPENSIVE) sortedTours = sortByPrice(tours, SortByPriceType.DESCENDING)
        else if (sortType === SortValues.FOR_RATING) sortedTours = sortByRating(tours)
    }

    return (
        <div className={"w-full flex flex-col gap-8"}>
            <Header
                city={location}
                count={sortedTours.length}
                sortType={sortType}
                setSortType={setSortType}
            />
            {sortedTours.length > 0 ? (
                sortedTours.slice(0, visibleTours).map(tour => (
                    <TourCard key={tour.id} tour={tour} />
                ))
            ) : (
                <p className={"text-center text-gray-500"}>
                    Экскурсии не найдены
                </p>
            )}
            <TourPagination
                visiable={visibleTours}
                setVisible={setVisibleTours}
                maxLength={tours.length}
            />
        </div>
    );
};
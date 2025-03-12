import {FC, useState} from "react";
import {TourCard, useSortedTours, useTours} from "@/entities";
import {SortValues} from "@/shared/types";
import {useSearchContext} from "@/features";
import {TourPagination} from "@/shared/ui";
import {Header} from "./header";

export const Index: FC = () => {

    const {context} = useSearchContext()
    const {data: tours} = useTours(context.searchParams)

    const [sortType, setSortType] = useState<SortValues>(SortValues.FOR_CHEAP)
    const {data: sortedTours} = useSortedTours(sortType, context.searchParams)

    const [visible, setVisible] = useState<number>(3)

    return (
        <div className={"w-full flex flex-col gap-8"}>
            <Header
                city={context.searchParams.location}
                count={sortedTours.length}
                sortType={sortType}
                setSortType={setSortType}
            />
            {sortedTours.length > 0 ? (
                sortedTours.slice(0, visible).map(tour => (
                    <TourCard key={tour.id} tour={tour} />
                ))
            ) : (
                <p className={"text-center text-gray-500"}>
                    Экскурсии не найдены
                </p>
            )}
            <TourPagination
                visiable={visible}
                setVisible={setVisible}
                maxLength={tours.length}
            />
        </div>
    );
};
import {FC, ReactNode, useState} from "react";
import {ITour} from "@/shared/types";
import {TourTrackingContext} from "@/features";
import {SortValues} from "@/shared/types/features";

export const TourTrackingProvider: FC<{children: ReactNode}> = ({children}) => {

    const [viewed, setViewed] = useState<ITour[]>(
        []
    )
    const [favourites, setFavourites] = useState<ITour[]>(
        []
    )
    const [sortType, setSortType] = useState<string>(
        SortValues.FOR_CHEAP
    )

    return (
        <TourTrackingContext.Provider value={
            {viewed, setViewed, favourites, setFavourites, sortType, setSortType}
        }>
            {children}
        </TourTrackingContext.Provider>
    );
};
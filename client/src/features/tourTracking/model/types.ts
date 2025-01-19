import {ITour} from "@/shared/types";

export type TourTrackingContextType = {
    viewed: ITour[]
    setViewed: (tours: ITour[]) => void
    favourites: ITour[]
    setFavourites: (tours: ITour[]) => void
    sortType: string
    setSortType: (type: string) => void
}
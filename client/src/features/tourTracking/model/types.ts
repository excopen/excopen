import {ITour} from "@/shared/types";

export type TourTrackingContextType = {
    viewed: ITour[]
    favourites: ITour[]
    addToFav: (tour: ITour) => void
    deleteFromFav: (tour: ITour) => void
    addToViewed: (tour: ITour) => void
}
import {ITour} from "@/shared/types";

export type TourTrackingContextType = {
    context: {
        viewed: ITour[]
        localFav: ITour[]
    }
    addToFav: (tour: ITour) => void
    deleteFromFav: (tour: ITour) => void
    addToViewed: (tour: ITour) => void
}
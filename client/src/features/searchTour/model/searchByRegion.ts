import {ITour} from "@/shared/types";

export const searchByRegion = (tours: ITour[], byRegion: boolean) : ITour[] => {
    return tours.filter(tour => tour.byCity === byRegion)
}
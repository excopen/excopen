import {ITour} from "@/shared/types";
import {useAuthContext} from "@/app/context";
import {useTourTrackingContext} from "@/features";
import {useAddViewed} from "./_privat";

export const useViewed = (): (tour: ITour) => void => {

    const { addToViewed: addLocalViewed } = useTourTrackingContext()
    const { isAuth } = useAuthContext()
    const { mutate: addViewed } = useAddViewed()

    return (tour: ITour) => {
        if (!isAuth) addLocalViewed(tour)
        else addViewed(tour.id)
    }

}
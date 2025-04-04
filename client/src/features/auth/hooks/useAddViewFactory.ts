import {ITour} from "@/shared/types";
import {HistoryEndpoint, tourLocalHistoryStore as store, useAddHistory, useAuthContext} from "@/features";

export const useAddViewFactory = (): (tour: ITour) => void => {

    const { isAuth } = useAuthContext()
    const { mutate: addViewed } = useAddHistory()

    return (tour: ITour) =>
        isAuth
            ? addViewed({tourId: tour.id, type: HistoryEndpoint.VIEWED})
            : store.addToViewed(tour)

}
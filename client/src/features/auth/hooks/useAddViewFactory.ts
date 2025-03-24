import {ITour} from "@/shared/types";
import {tourHistoryStore, useAddViewed} from "@/entities";
import {useAuthContext} from "@/features";

export const useAddViewFactory = (): (tour: ITour) => void => {

    const { isAuth } = useAuthContext()
    const { mutate: addViewed } = useAddViewed()

    return (tour: ITour) => isAuth ? addViewed(tour.id) : tourHistoryStore.addToViewed(tour)

}
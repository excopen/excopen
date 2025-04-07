import {ITour} from "@/shared/types";
import {useCallback, useEffect, useState} from "react";
import {
    HistoryEndpoint,
    tourLocalHistoryStore as store,
    useAddHistory,
    useAuthContext,
    useDeleteHistory,
    useHistory
} from "@/features";

type ResultType = {
    isActive: boolean
    clickHandler: () => void
}

export const useAddFavFactory = (tour: ITour): ResultType => {

    const { user, isAuth } = useAuthContext()

    const local = store.favourites
    const { data } = useHistory(user?.id as number, HistoryEndpoint.FAVOURITES)

    const { mutate: addFav } = useAddHistory()
    const { mutate: deleteFav } = useDeleteHistory()

    const [isActive, setIsActive] = useState<boolean>(false)

    // Определяем начальное состояние кнопки
    useEffect(() => {
        if (!isAuth) setIsActive(local.some(fav => fav.id === tour.id))
        else setIsActive(data.some(fav => fav.id === tour.id))
    }, [local, data, isAuth, tour.id])

    const clickHandler = useCallback(() => {
        if (!isActive) {
            if (!isAuth) store.addToFav(tour)
            else addFav({tourId: tour.id, type: HistoryEndpoint.FAVOURITES})
        } else {
            if (!isAuth) store.deleteFromFav(tour)
            else deleteFav({tourId: tour.id, type: HistoryEndpoint.FAVOURITES})
        }
        setIsActive(!isActive)
    }, [addFav, deleteFav, isActive, isAuth, tour])

    return {isActive, clickHandler}

}
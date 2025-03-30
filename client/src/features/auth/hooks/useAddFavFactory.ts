import {ITour} from "@/shared/types";
import {useCallback, useEffect, useState} from "react";
import {tourHistoryStore, useAddToFav, useDeleteFromFav, useFav} from "@/entities";
import {useAuthContext} from "@/features";

type ResultType = {
    isActive: boolean
    clickHandler: () => void
}

export const useAddFavFactory = (tour: ITour): ResultType => {

    const { userId, isAuth } = useAuthContext()

    const local = tourHistoryStore.favourites
    const { data } = useFav(userId)

    const { mutate: addFav } = useAddToFav()
    const { mutate: deleteFav } = useDeleteFromFav()

    const [isActive, setIsActive] = useState<boolean>(false)

    // Определяем начальное состояние кнопки
    useEffect(() => {
        if (!isAuth) setIsActive(local.some(fav => fav.id === tour.id))
        else setIsActive(data.some(fav => fav.id === tour.id))
    }, [local, data, isAuth, tour.id])

    const clickHandler = useCallback(() => {
        if (!isActive) {
            if (!isAuth) tourHistoryStore.addToFav(tour)
            else addFav(tour.id)
        } else {
            if (!isAuth) tourHistoryStore.deleteFromFav(tour)
            else deleteFav(tour.id)
        }
        setIsActive(!isActive)
    }, [addFav, deleteFav, isActive, isAuth, tour])

    return {isActive, clickHandler}

}
import {ITour} from "@/shared/types";
import {useAuthContext} from "@/app/context";
import {useTourTrackingContext} from "@/features";
import {useCallback, useEffect, useState} from "react";
import {useAddToFav, useDeleteFromFav, useFav} from "./_privat";

type ResultType = {
    isActive: boolean
    clickHandler: () => void
}

export const useFavourite = (tour: ITour): ResultType => {

    const { context, addToFav, deleteFromFav } = useTourTrackingContext()
    const { userId, isAuth } = useAuthContext()
    const { data: favourites = [] } = useFav(userId)
    const { mutate: addToFavourites } = useAddToFav()
    const { mutate: deleteFromFavourites } = useDeleteFromFav()

    const [isActive, setIsActive] = useState<boolean>(false)

    // Определяем начальное состояние кнопки
    useEffect(() => {
        if (!isAuth) setIsActive(context.fav.some(fav => fav.id === tour.id))
        else setIsActive(favourites.some(fav => fav.id === tour.id))
    }, [context.fav, favourites, isAuth, tour.id])

    const clickHandler = useCallback(() => {
        if (!isActive) {
            if (!isAuth) addToFav(tour)
            else addToFavourites(tour.id)
        } else {
            if (!isAuth) deleteFromFav(tour)
            else deleteFromFavourites(tour.id)
        }
        setIsActive(!isActive)
    }, [addToFav, addToFavourites, deleteFromFav, deleteFromFavourites, isActive, isAuth, tour])

    return {isActive, clickHandler}

}
import {useAuthContext} from "@/app/context";
import {useTourTrackingContext} from "@/features";
import {useFav} from "@/entities/favourites/model/_privat/useFav.ts";
import {useMemo} from "react";
import {ITour} from "@/shared/types";

export const useGetFavourites = () : ITour[] => {

    const {isAuth, userId} = useAuthContext()
    const {data} = useFav(userId)
    const {context} = useTourTrackingContext()

    return useMemo(
        () => isAuth ? data : context.fav,
        [context.fav, data, isAuth]
    )

}
import {useMemo} from "react";
import {ITour} from "@/shared/types";
import {tourHistoryStore, useFav} from "@/entities";
import {useAuthContext} from "@/features";

export const useFavFactory = () : ITour[] => {

    const {isAuth, userId} = useAuthContext()
    const {data} = useFav(userId)

    const local = tourHistoryStore.favourites

    return useMemo(
        () => isAuth ? data : local,
        [data, isAuth, local]
    )

}
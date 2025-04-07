import {useMemo} from "react";
import {ITour} from "@/shared/types";
import {HistoryEndpoint, tourLocalHistoryStore as store, useAuthContext, useHistory} from "@/features";

export const useFavFactory = () : ITour[] => {

    const {isAuth, userId} = useAuthContext()
    const {data} = useHistory(userId, HistoryEndpoint.FAVOURITES)

    const local = store.favourites

    return useMemo(
        () => isAuth ? data : local,
        [data, isAuth, local]
    )

}
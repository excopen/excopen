import {useMemo} from "react";
import {ITour} from "@/shared/types";
import {tourHistoryStore, useViewed} from "@/entities";
import {useAuthContext} from "@/features";

export const useViewFactory = () : ITour[] => {

    const {isAuth, userId} = useAuthContext()
    const {data} = useViewed(userId)
    const local = tourHistoryStore.viewed

    return useMemo(
        () => isAuth ? data : local,
        [local, data, isAuth]
    )

}
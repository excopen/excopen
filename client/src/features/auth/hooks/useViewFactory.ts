import {useMemo} from "react";
import {ITour} from "@/shared/types";
import {HistoryEndpoint, tourLocalHistoryStore as store, useAuthContext, useHistory} from "@/features";

export const useViewFactory = () : ITour[] => {

    const {isAuth, userId} = useAuthContext()
    const {data} = useHistory(userId, HistoryEndpoint.VIEWED)
    const local = store.viewed

    //isAuth ? data : local

    return useMemo(
        () => local,
        [local]
    )

}
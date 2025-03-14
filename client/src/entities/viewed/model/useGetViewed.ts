import {useAuthContext} from "@/app/context";
import {useTourTrackingContext} from "@/features";
import {useMemo} from "react";
import {ITour} from "@/shared/types";
import {useViewed} from "./_privat";

export const useGetViewed = () : ITour[] => {

    const {isAuth, userId} = useAuthContext()
    const {data} = useViewed(userId)
    const {context} = useTourTrackingContext()

    return useMemo(
        () => isAuth ? data : context.viewed,
        [context.viewed, data, isAuth]
    )

}
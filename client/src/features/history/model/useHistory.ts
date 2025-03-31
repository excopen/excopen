import {useQuery} from "@tanstack/react-query";
import {EndpointsType, ITour} from "@/shared/types";
import {ApiException} from "@/shared/lib";
import {getHistory} from "@/features/history/api";

export const useViewed = (userId: number) => {
    return useQuery<ITour[], ApiException<ITour>>({
        queryKey: ["viewed", userId],
        queryFn: () => getHistory(userId, EndpointsType.FAVOURITES),
        staleTime: 60_000,
        initialData: [],
        enabled: !!userId
    })
}
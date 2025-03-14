import {useQuery} from "@tanstack/react-query";
import {ITour} from "@/shared/types";
import {ApiException} from "@/shared/lib";
import {getViewed} from "@/entities/viewed/api";

export const useViewed = (userId: number) => {
    return useQuery<ITour[], ApiException<ITour>>({
        queryKey: ["viewed", userId],
        queryFn: () => getViewed(userId),
        staleTime: 60_000,
        initialData: [],
        enabled: !!userId
    })
}
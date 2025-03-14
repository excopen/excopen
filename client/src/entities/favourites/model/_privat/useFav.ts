import {useQuery} from "@tanstack/react-query";
import {ITour} from "@/shared/types";
import {ApiException} from "@/shared/lib";
import {getFav} from "@/entities/favourites/api";

export const useFav = (userId: number) => {
    return useQuery<ITour[], ApiException<ITour>>({
        queryKey: ["fav", userId],
        queryFn: () => getFav(userId),
        staleTime: 60_000,
        initialData: [],
        enabled: !!userId
    })
}
import {useQuery} from "@tanstack/react-query";
import {getReview} from "@/entities/review/model";
import {IReview} from "@/shared/types";
import {ApiException} from "@/shared/lib";

export const useReview = (id: number) => {
    return useQuery<IReview, ApiException<IReview>>({
        queryKey: ["review", id],
        queryFn: () => getReview(id),
        staleTime: 60_000,
        enabled: !!id
    })
}
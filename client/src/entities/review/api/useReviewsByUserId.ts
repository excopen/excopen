import {useQuery} from "@tanstack/react-query";
import {IReview} from "@/shared/types";
import {ApiException} from "@/shared/lib";
import {getReviewsByUserId} from "@/entities/review/model";

export const useReviewsByUserId = (userId: number) => {
    return useQuery<IReview[], ApiException<IReview>>({
        queryKey: ["reviews", "user", userId],
        queryFn: () => getReviewsByUserId(userId),
        staleTime: 60_000,
        initialData: [],
        enabled: !!userId
    })
}
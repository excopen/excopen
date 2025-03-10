import {useQuery} from "@tanstack/react-query";
import {IReview} from "@/shared/types";
import {ApiException} from "@/shared/lib";
import {getReviewsByTourId} from "@/entities/review/api";
import {ReviewsArray} from "@/shared/assets/tempData/ReviewsArray.ts";

// TODO убрать моковые данные в будущем

export const useReviewsByTourId = (tourId: number) => {
    return useQuery<IReview[], ApiException<IReview>>({
        queryKey: ["reviews", "tour", tourId],
        queryFn: async () => {
            const reviews: IReview[] = await getReviewsByTourId(tourId)
            return reviews.length > 0 ? reviews : ReviewsArray
        },
        staleTime: 60_000,
        initialData: ReviewsArray,
        enabled: !!tourId
    })
}
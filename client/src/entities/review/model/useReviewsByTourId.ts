import {useQuery} from "@tanstack/react-query";
import {IReview} from "@/shared/types";
import {ApiException} from "@/shared/lib";
import {getReviewsByTourId} from "@/entities/review/api";
import {ReviewsArray} from "@/shared/assets/tempData/ReviewsArray.ts";

// Список отзывов в туре

export const useReviewsByTourId = (tourId: number) => {

    const fallback = ReviewsArray

    const query = useQuery<IReview[], ApiException<IReview>>({
        queryKey: ["reviews", "tour"],
        queryFn: async () => {
            const reviews: IReview[] = await getReviewsByTourId(tourId)
            return reviews.length > 0 ? reviews : fallback
        },
        staleTime: 60_000,
        initialData: fallback,
        enabled: !!tourId
    })

    return {
        ...query,
        isEmpty: query.data.length === 0
    }

}
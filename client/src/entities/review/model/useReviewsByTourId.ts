import {useQuery} from "@tanstack/react-query";
import {IReview} from "@/shared/types";
import {ApiException} from "@/shared/lib";
import {getReviewsByTourId} from "@/entities/review/api";

// TODO убрать моковые данные отзывов
import {ReviewsMock} from "@/shared/mocks/ReviewsMock.ts";

export const useReviewsByTourId = (tourId: number) => {

    const fallback = ReviewsMock

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
import {useQuery} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {ITour} from "@/shared/types";
import {getTourById} from "@/entities/tour/api";

import {ToursArray} from "@/shared/assets/tempData/ToursArray.ts";

// Хук для бронирования
// Страница тура

export const useTour = (id: number) => {

    const fallback = ToursArray[0]

    const query = useQuery<ITour, ApiException<ITour>>({
        queryKey: ["tour", id],
        queryFn: async () => {
            const tour = await getTourById(id)
            return tour ?? fallback
        },
        initialData: fallback,
        staleTime: 60_000,
        enabled: !!id
    })

    return {
        ...query,
        isFallback: fallback === query.data
    }

}
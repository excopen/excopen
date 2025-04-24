import {useQuery} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {ITour} from "@/shared/types";
import {getTourById} from "@/entities/tour/api";

// TODO моковый список экскурсий
import {ToursMock} from "@/shared/mocks/ToursMock.ts";

export const useTour = (id: number) => {

    const fallback = ToursMock[0]

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
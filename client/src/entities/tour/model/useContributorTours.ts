import {ITour} from "@/shared/types";
import {useQuery} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {getToursByContributor} from "@/entities/tour/api";

// TODO моковый список экскурсий
import {ToursMock} from "@/shared/mocks/ToursMock.ts";

export const useContributorTours = (contributorId: number) => {

    const fallback = ToursMock

    const query = useQuery<ITour[], ApiException<ITour>>({
        queryKey: ["tours", contributorId],
        queryFn: async (): Promise<ITour[]> => {
            const tours = await getToursByContributor(contributorId)
            return tours.length > 0 ? tours : fallback
        },
        staleTime: 60_000,
        initialData: fallback
    })

    return {
        ...query,
        isEmpty: query.data.length === 0
    }

}
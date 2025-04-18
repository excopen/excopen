import {ITour} from "@/shared/types";
import {useQuery} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {getToursByContributor} from "@/entities/tour/api";
import {ToursArray} from "@/shared/assets/tempData/ToursArray.ts";

export const useContributorTours = (contributorId: number) => {

    const fallback = ToursArray

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
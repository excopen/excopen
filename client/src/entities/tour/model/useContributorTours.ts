import {ITour} from "@/shared/types";
import {useQuery} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {getToursByContributor} from "@/entities/tour/api";
import {ToursArray} from "@/shared/assets/tempData/ToursArray.ts";

// Todo убрать ToursArray, когда будут приходить реальные данные

export const useContributorTours = (contributorId: number) => {
    return useQuery<ITour[], ApiException<ITour>>({
        queryKey: ["tours", contributorId],
        queryFn: async (): Promise<ITour[]> => {
            const tours = await getToursByContributor(contributorId)
            return tours.length > 0 ? tours : ToursArray
        },
        staleTime: 60_000,
        initialData: ToursArray
    })
}
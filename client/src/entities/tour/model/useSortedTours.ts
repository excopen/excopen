import {ITour, SearchParamsType, SortValues} from "@/shared/types";
import {useQuery} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {getSortedTours} from "@/entities/tour/api";
import {ToursArray} from "@/shared/assets/tempData/ToursArray.ts";

// TODO Убрать моковые данные в будущем

export const useSortedTours = (sort: SortValues, searchParams: SearchParamsType) => {
    return useQuery<ITour[], ApiException<ITour>>({
        queryKey: ["tours", sort, searchParams],
        queryFn: async (): Promise<ITour[]> => {
            const tours = await getSortedTours(sort, searchParams)
            return tours.length > 0 ? tours : ToursArray
        },
        staleTime: 60_000,
        initialData: ToursArray
    })
}
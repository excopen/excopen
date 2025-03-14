import {ITour, SearchParamsType} from "@/shared/types";
import {useQuery} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {getTours} from "@/entities/tour/api";
import {ToursArray} from "@/shared/assets/tempData/ToursArray.ts";

// Todo убрать ToursArray, когда будут приходить реальные данные

export const useTours = (params: SearchParamsType | null) => {
    return useQuery<ITour[], ApiException<ITour>>({
        queryKey: ["tours", params],
        queryFn: async (): Promise<ITour[]> => {
            const tours = await getTours(params)
            return tours.length > 0 ? tours : ToursArray
        },
        staleTime: 60_000,
        initialData: ToursArray
    })
}
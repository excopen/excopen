import {ITour} from "@/shared/types";
import {useQuery} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {getTours} from "@/entities/tour/api";
import {ToursArray} from "@/shared/assets/tempData/ToursArray.ts";
import {useSearchContext} from "@/features";

// Todo убрать ToursArray, когда будут приходить реальные данные

export const useTours = () => {

    const {context} = useSearchContext()

    return useQuery<ITour[], ApiException<ITour>>({
        queryKey: ["tours", context.searchParams, context.sort],
        queryFn: async (): Promise<ITour[]> => {
            const tours = await getTours(context.sort, context.searchParams)
            return tours.length > 0 ? tours : ToursArray
        },
        staleTime: 60_000,
        initialData: ToursArray
    })

}
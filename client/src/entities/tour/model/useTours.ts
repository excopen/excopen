import {ITour} from "@/shared/types";
import {useQuery} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {getTours} from "@/entities/tour/api";
import {searchTourStore as store} from "@/features";

import {ToursArray} from "@/shared/assets/tempData/ToursArray.ts";

export const useTours = () => {

    const fallback = ToursArray

    const query = useQuery<ITour[], ApiException<ITour>>({
        queryKey: ["tours"],
        queryFn: async (): Promise<ITour[]> => {
            const tours = await getTours(store.searchParams.sort, store.searchParams)
            return tours.length > 0 ? tours : fallback
        },
        staleTime: 60_000,
        initialData: fallback
    })

    return {
        ...query,
        length: query.data.length,
        isEmpty: query.data.length === 0,
        hasData: query.data.length > 0,
    }

}
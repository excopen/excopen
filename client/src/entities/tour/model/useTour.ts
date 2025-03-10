import {useQuery} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {ITour} from "@/shared/types";
import {getTourById} from "@/entities/tour/api";
import {ToursArray} from "@/shared/assets/tempData/ToursArray.ts";

export const useTour = (id: number) => {
    return useQuery<ITour, ApiException<ITour>>({
        queryKey: ["tour", id],
        queryFn: async () => {
            const tour = await getTourById(id)
            return tour ?? ToursArray[0]
        },
        initialData: ToursArray[0],
        staleTime: 60_000,
        enabled: !!id
    })
}
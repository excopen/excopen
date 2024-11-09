import {useQuery} from "@tanstack/react-query";
import {filterTours} from "src/entities/tour/model/utils";
import {SearchParamsType, ITour} from "@/shared/types";
import {fetchData} from "src/shared/lib";

export const useTours = (searchParams: SearchParamsType) => {

    const {data, isLoading, error} = useQuery<ITour[], null>({
        queryKey: ['tours'],
        queryFn: () => fetchData<ITour>("/tours"),
        staleTime: 60000
    })

    if (isLoading) return {isLoading: true, data: [], error: null}
    if (error) return {isLoading: false, data: [], error: error}

    const filteredTours: ITour[] = data ? filterTours(data, searchParams) : []
    return {isLoading, data: filteredTours, error: null}

}
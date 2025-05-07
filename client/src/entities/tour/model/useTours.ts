import {ITour} from "@/shared/types";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {getTours} from "@/entities/tour/api";
import {searchTourStore as store} from "@/features";
import {useMemo} from "react";
import {toJS} from "mobx";

export const useTours = () => {

    const queryClient = useQueryClient()
    const searchParams = useMemo(() => toJS(store.searchParams), [store.searchParams])

    const query = useQuery<ITour[], ApiException<ITour>>({
        queryKey: ["tours", searchParams],
        queryFn: () => getTours(searchParams),
        staleTime: 10_000,
        refetchOnWindowFocus: true,
        placeholderData: []
    })

    const clearCache = async () => {
        await queryClient.invalidateQueries({queryKey: ["tours", searchParams]})
    }

    return {
        ...query,
        data: query.data ?? [],
        length: query.data ? query.data.length : 0,
        clearCache
    }

}
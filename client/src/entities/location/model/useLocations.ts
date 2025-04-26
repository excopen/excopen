import {useQuery} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {ILocation} from "@/shared/types";
import {getLocations} from "@/entities/location/api";

export const useLocations = () => {
    return useQuery<ILocation[], ApiException<ILocation>>({
        queryKey: ["locations"],
        queryFn: () => getLocations(),
        staleTime: 300_000,
        refetchOnWindowFocus: false,
        refetchInterval: false,
        initialData: []
    })

}
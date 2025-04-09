import {useQuery} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {ILocation} from "@/shared/types";
import {LocationsArrayForFeature} from "@/shared/assets/tempData/LocationsArrayForFeature.ts";
import {getLocations} from "@/entities/location/api";

// Все поля ввода с локацией

export const useLocations = () => {

    const fallback = LocationsArrayForFeature

    return useQuery<ILocation[], ApiException<ILocation>>({
        queryKey: ["locations"],
        queryFn: async (): Promise<ILocation[]> => {
            const locations = await getLocations()
            return locations.length > 0 ? locations : fallback
        },
        staleTime: 300_000,
        refetchOnWindowFocus: false,
        refetchInterval: false,
        initialData: fallback
    })

}
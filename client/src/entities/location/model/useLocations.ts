import {useQuery} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {ILocation} from "@/shared/types";
import {LocationsArrayForFeature} from "@/shared/assets/tempData/LocationsArrayForFeature.ts";
import {getLocations} from "@/entities/location/api";

// TODO убрать моковые данные в будущем

export const useLocations = () => {
    return useQuery<ILocation[], ApiException<ILocation>>({
        queryKey: ["locations"],
        queryFn: async (): Promise<ILocation[]> => {
            const locations = await getLocations()
            return locations.length > 0 ? locations : LocationsArrayForFeature
        },
        staleTime: 60_000,
        initialData: LocationsArrayForFeature
    })
}
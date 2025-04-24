import {useQuery} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {ILocation} from "@/shared/types";
import {getLocations} from "@/entities/location/api";

// TODO убрать моковые данные отзывов
import {LocationsMock} from "@/shared/mocks/LocationsMock.ts";

export const useLocations = () => {

    const fallback = LocationsMock

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
import {useQuery} from "@tanstack/react-query";
import {ITour} from "@/shared/types";
import {fetchFavourites} from "@/entities/favourites/model";

export const useGetFavourites = (): ITour[] => {

    const {data = []} = useQuery<ITour[]>({
        queryKey: ["favourites"],
        queryFn: fetchFavourites,
        staleTime: 60000
    })

    return data

}
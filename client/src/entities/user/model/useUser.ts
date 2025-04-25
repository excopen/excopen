import {useQuery} from "@tanstack/react-query";
import {IUser} from "@/shared/types";
import {ApiException} from "@/shared/lib";
import {getUser} from "@/entities/user/api";

export const useUser = (id: number) => {

    const fallback: IUser = {
        id: 0,
        name: "",
        surname: "",
        avatar: "",
        info: "",
        rating: 0,
        ratingCount: 0,
        tours: [],
        contacts: {
            phone: ""
        }
    }

    return useQuery<IUser, ApiException<IUser>>({
        queryKey: ["user"],
        queryFn: () => getUser(id),
        staleTime: 600_000,
        enabled: !!id,
        initialData: fallback
    })
}
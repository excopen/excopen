import {useQuery} from "@tanstack/react-query";
import {IUser} from "@/shared/types";
import {ApiException} from "@/shared/lib";
import {getUser} from "@/entities";
import {UserObject} from "@/shared/assets/tempData/UserObject.ts";

// TODO убрать моковые данные

export const useUser = (id: number) => {
    return useQuery<IUser, ApiException<IUser>>({
        queryKey: ["user", id],
        queryFn: async (): Promise<IUser> => {
            const user = await getUser(id)
            return user ?? UserObject
        },
        initialData: UserObject,
        staleTime: 60_000,
        enabled: !!id
    })
}
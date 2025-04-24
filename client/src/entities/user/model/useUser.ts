import {useQuery} from "@tanstack/react-query";
import {IUser} from "@/shared/types";
import {ApiException} from "@/shared/lib";
import {getUser} from "@/entities/user/api";

// TODO убрать MOCK
import {UserMock} from "@/shared/mocks/UserMock.ts";

export const useUser = (id: number) => {

    const fallback = UserMock

    return useQuery<IUser, ApiException<IUser>>({
        queryKey: ["user"],
        queryFn: async (): Promise<IUser> => {
            const user = await getUser(id)
            return user ?? fallback
        },
        initialData: fallback,
        staleTime: 600_000,
        enabled: !!id
    })
}
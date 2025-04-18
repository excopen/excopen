import {useQuery} from "@tanstack/react-query";
import {IUser, UserRole} from "@/shared/types";
import {getMe} from "@/features/auth/api";

export const useMe = () => {

    const fallback: IUser = {
        id: 0,
        role: UserRole.client,
        avatar: "",
        name: "",
        surname: "",
        tags: [],
        email: "",
        token: "",
        orders: []
    }

    const query = useQuery({
        queryKey: ["me"],
        queryFn: getMe,
        staleTime: 300_000,
        retry: false,
        initialData: fallback
    })

    return {
        isSuccess: query.isSuccess,
        user: query.isSuccess ? query.data : fallback
    }

}
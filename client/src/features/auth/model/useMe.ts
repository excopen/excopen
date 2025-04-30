import {useQuery} from "@tanstack/react-query";
import {IMe, UserRole} from "@/shared/types";
import {getMe} from "@/features/auth/api";
import avatar from "@/shared/assets/icons/avatar.svg"

export const useMe = () => {

    const fallback: IMe = {
        id: 0,
        role: UserRole.client,
        avatar: avatar,
        avatarFile: null,
        name: "",
        surname: "",
        email: "",
        tags: [],
        tours: [],
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
import {useQuery} from "@tanstack/react-query";
import {IMe, UserRole} from "@/shared/types";
import {getMe} from "@/features/auth/api";

import avatar from "@/shared/assets/icons/avatar.svg"

export const useMe = () => {

    // mock
    const fallback: IMe = {
        id: 0,
        role: UserRole.client,
        avatar: avatar,
        name: "Дмитрий",
        surname: "Иванов",
        email: "",
        tags: ["активный отдых", "морские путешествия", "походы и кемпинг", "исторические места", "достопримечательности", "природа и экология"],
        tours: [],
        orders: [],
        contacts: {
            vk: "@ivanov",
            telegram: "@dmIvanov",
            phone: "+7 (999) 888-77-44"
        }
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
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {IUser} from "@/shared/types";
import {ApiException} from "@/shared/lib";
import {updateUser} from "@/entities/user/api";

// Обновление данных в профиле

export const useUpdateUser = () => {

    const queryClient = useQueryClient()

    return useMutation<IUser, ApiException<IUser>, IUser>({
        mutationFn: updateUser,
        onMutate: async (user) => {

            await queryClient.cancelQueries({ queryKey: ["user", user.id] })

            const previous = queryClient.getQueryData<IUser>(["user", user.id])
            queryClient.setQueryData(["user", user.id], user)

            return { previous }

        },
        onSuccess: async (user) => {
            await queryClient.invalidateQueries({ queryKey: ["user", user.id] })
        },
        onError: (e: ApiException<IUser>) => console.error("Данные пользователя не удалось обновить", e.message)
    })

}
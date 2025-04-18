import {useMutation, useQueryClient} from "@tanstack/react-query";
import {IUser} from "@/shared/types";
import {ApiException} from "@/shared/lib";
import {updateUser} from "@/entities/user/api";

export const useUpdateUser = () => {

    const queryClient = useQueryClient()

    return useMutation<IUser, ApiException<IUser>, IUser>({
        mutationFn: updateUser,
        onMutate: async (user) => {

            await queryClient.cancelQueries({ queryKey: ["user"] })

            const previous = queryClient.getQueryData<IUser>(["user"])
            queryClient.setQueryData(["user"], user)

            return { previous }

        },
        onSuccess: async (user) => {
            await queryClient.invalidateQueries({ queryKey: ["user", user.id] })
        },
        onError: (e: ApiException<IUser>) => console.error("Данные пользователя не удалось обновить", e.message)
    })

}
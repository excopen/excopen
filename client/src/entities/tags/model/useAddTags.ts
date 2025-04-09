import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {addTags} from "@/entities/tags/api";
import {ITag} from "@/shared/types";

type Props = {
    userId: number
    tags: string[]
}

// Контекст авторизации

export const useAddTags = () => {

    const queryClient = useQueryClient()

    return useMutation<void, ApiException<ITag[]>, Props>({
        mutationFn: ({userId, tags}: Props) => addTags(userId, tags),
        onMutate: async ({ userId }) => {
            await queryClient.cancelQueries({ queryKey: ["user", userId] })
        },
        onSuccess: async (_, {userId}) => {
            await queryClient.invalidateQueries({ queryKey: ["user", userId] })
        },
        onError: (e: ApiException<ITag[]>) => console.error("Теги пользователя не удалось обновить", e.message)
    })
}
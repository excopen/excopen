import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {IReview} from "@/shared/types";
import {deleteReview} from "@/entities/review/api";

export const useDeleteReview = () => {

    const queryClient = useQueryClient()

    return useMutation<void, ApiException<IReview>, number>({
        mutationFn: deleteReview,
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ["reviews", "user"]})
        },
        onError: (e: ApiException<IReview>) => {
            throw new ApiException<IReview>(e.message, e.statusCode, e.data)
        }
    })

}
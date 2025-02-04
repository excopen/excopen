import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {deleteReview} from "@/entities/review/model";
import {IReview} from "@/shared/types";

export const useDeleteReview = () => {

    const queryClient = useQueryClient()

    return useMutation<void, ApiException<IReview>, number>({
        mutationFn: deleteReview,
        onSuccess: () => queryClient.invalidateQueries({queryKey: ["deleteReview"]}),
        onError: (e: ApiException<IReview>) => {
            throw new ApiException<IReview>(e.message, e.statusCode, e.data)
        }
    })

}
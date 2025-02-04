import {useMutation, useQueryClient} from "@tanstack/react-query";
import {IReview} from "@/shared/types";
import {ApiException} from "@/shared/lib";
import {createReview} from "@/entities/review/model";

export const useCreateReview = () => {

    const queryClient = useQueryClient()

    return useMutation<IReview, ApiException<IReview>,IReview>({
        mutationFn: createReview,
        onSuccess: () => queryClient.invalidateQueries({queryKey: ["createReview"]}),
        onError: (e: ApiException<IReview>) => {
            throw new ApiException<IReview>(e.message, e.statusCode, e.data)
        }
    })

}
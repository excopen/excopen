import {useMutation, useQueryClient} from "@tanstack/react-query";
import {IReview} from "@/shared/types";
import {ApiException} from "@/shared/lib";
import {createReview} from "@/entities/review/api";

export const useCreateReview = () => {

    const queryClient = useQueryClient()

    return useMutation<void, ApiException<IReview>, IReview>({
        mutationFn: createReview,
        onMutate: async (newReview) => {

            const previous = queryClient.getQueryData<IReview[]>(["reviews", "user"]);

            queryClient.setQueryData<IReview[]>(
                ["reviews", "user"],
                (oldReviews = []) => [...oldReviews, newReview]
            )

            return { previous }

        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ["reviews", "user"]})
        },
        onError: (e: ApiException<IReview>) => {
            throw new ApiException<IReview>(e.message, e.statusCode, e.data)
        }
    })

}
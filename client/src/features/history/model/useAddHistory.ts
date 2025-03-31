import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ITour} from "@/shared/types";
import {ApiException} from "@/shared/lib";
import {addToViewed} from "@/features/history/api";

export const useAddViewed = () => {

    const queryClient = useQueryClient()

    return useMutation<void, ApiException<ITour>, number>({
        mutationFn: addToViewed,
        onSuccess: () => queryClient.invalidateQueries({queryKey: ["viewed"]}),
        onError: (e: ApiException<ITour>) => {
            throw new ApiException<ITour>(e.message, e.statusCode, e.data)
        }
    })

}
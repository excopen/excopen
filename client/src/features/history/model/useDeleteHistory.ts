import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {ITour} from "@/shared/types";
import {deleteHistory} from "@/features/history/api";

export const useDeleteFromFav = () => {

    const queryClient = useQueryClient()

    return useMutation<void, ApiException<ITour>, number>({
        mutationFn: deleteHistory,
        onSuccess: () => queryClient.invalidateQueries({queryKey: ["fav"]}),
        onError: (e: ApiException<ITour>) => {
            throw new ApiException<ITour>(e.message, e.statusCode, e.data)
        }
    })

}
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {ITour} from "@/shared/types";
import {deleteHistory} from "@/features/history/api";
import {HistoryEndpoint} from "@/features/history/types";

export const useDeleteHistory = () => {

    const queryClient = useQueryClient()

    return useMutation<void, ApiException<ITour>, { tourId: number, type: HistoryEndpoint }>({
        mutationFn: ({tourId, type}) => deleteHistory(tourId, type),
        onMutate: async ({tourId}) => {

            await queryClient.cancelQueries({ queryKey: ["history", tourId] })

            const previous = queryClient.getQueryData<ITour[]>(["history", tourId])

            queryClient.setQueryData<ITour[]>(
                ["history", tourId],
                (old = []) => old.filter((tour) => tour.id !== tourId)
            )

            return { previous }

        },
        onSuccess: async (_, {tourId}) => {
            await queryClient.invalidateQueries({ queryKey: ["history", tourId] })
        },
        onError: (e: ApiException<ITour>) => {
            throw new ApiException<ITour>(e.message, e.statusCode, e.data)
        }
    })

}
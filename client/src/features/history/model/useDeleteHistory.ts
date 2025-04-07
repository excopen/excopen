import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {ITour} from "@/shared/types";
import {deleteHistory} from "@/features/history/api";
import {HistoryEndpoint} from "@/features/history/types";

export const useDeleteHistory = () => {

    const queryClient = useQueryClient()

    return useMutation<void, ApiException<ITour>, { tourId: number, type: HistoryEndpoint }>({
        mutationFn: ({tourId, type}) => deleteHistory(tourId, type),
        onSuccess: (_, { type }) => {
            queryClient.invalidateQueries({ queryKey: ["history", type] })
        },
        onError: (e: ApiException<ITour>) => {
            throw new ApiException<ITour>(e.message, e.statusCode, e.data)
        }
    })

}
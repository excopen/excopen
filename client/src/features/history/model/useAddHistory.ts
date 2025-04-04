import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ITour} from "@/shared/types";
import {ApiException} from "@/shared/lib";
import {addHistory} from "@/features/history/api";
import {HistoryEndpoint} from "@/features/history/types";

export const useAddHistory = () => {

    const queryClient = useQueryClient()

    return useMutation<void, ApiException<ITour>, { tourId: number, type: HistoryEndpoint }>({
        mutationFn: ({tourId, type}) => addHistory(tourId, type),
        onSuccess: (_, { type }) => {
            queryClient.invalidateQueries({ queryKey: ["history", type] })
        },
        onError: (e: ApiException<ITour>) => {
            throw new ApiException<ITour>(e.message, e.statusCode, e.data)
        }
    })

}
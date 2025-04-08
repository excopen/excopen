import {apiClient, ApiException, isAxiosError} from "@/shared/lib";
import {ITour} from "@/shared/types";
import {HistoryEndpoint} from "@/features/history/types";

export const deleteHistory = async (tourId: number, endpoint: HistoryEndpoint): Promise<void> => {
    try {
        await apiClient.delete(`${endpoint}/${tourId}`)
    } catch (e) {
        if (isAxiosError(e)) {
            throw new ApiException<ITour>(e.message, e.response?.status, e.response?.data as ITour | undefined)
        }
        throw e
    }
}
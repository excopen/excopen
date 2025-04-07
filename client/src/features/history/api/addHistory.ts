import {apiClient, ApiException, isAxiosError} from "@/shared/lib";
import {ITour} from "@/shared/types";
import {HistoryEndpoint} from "@/features";

export const addHistory = async (tourId: number, endpoint: HistoryEndpoint): Promise<void> => {
    try {
        await apiClient.post<ITour>(`${endpoint}/${tourId}`)
    } catch (e) {
        if (isAxiosError(e)) {
            throw new ApiException<ITour>(e.message, e.response?.status, e.response?.data as ITour | undefined)
        }
        throw e
    }
}
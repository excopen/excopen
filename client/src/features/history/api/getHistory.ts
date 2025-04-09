import {apiClient, ApiException, isAxiosError} from "@/shared/lib";
import {ITour} from "@/shared/types";
import {HistoryEndpoint} from "@/features";

export const getHistory = async (tourId: number, endpoint: HistoryEndpoint): Promise<ITour[]> => {
    try {
        const response = await apiClient.get<ITour[]>(`${endpoint}/${tourId}`)
        return response.data
    } catch (e) {
        if (isAxiosError(e)) {
            throw new ApiException<ITour>(
                e.message,
                e.response?.status,
                e.response?.data as ITour[] | undefined
            )
        }
        throw e
    }
}
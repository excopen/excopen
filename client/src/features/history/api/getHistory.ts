import {apiClient, ApiException, isAxiosError} from "@/shared/lib";
import {ITour} from "@/shared/types";
import {HistoryEndpoint} from "@/features";

export const getHistory = async (userId: number, endpoint: HistoryEndpoint): Promise<ITour[]> => {
    try {
        const response = await apiClient.get<ITour[]>(`${endpoint}/${userId}`)
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
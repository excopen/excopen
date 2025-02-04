import axios from "axios";
import {apiClient, ApiException} from "@/shared/lib";
import {EndpointsType, IReview} from "@/shared/types";

export const getReviewsByUserId = async (userId: number): Promise<IReview[]> => {
    try {
        const response = await apiClient.get<IReview[]>(`${EndpointsType.REVIEWS}/user`, {
            params: { userId }
        })
        return response.data
    } catch (e) {
        if (axios.isAxiosError(e)) {
            throw new ApiException<IReview>(e.message, e.response?.status, e.response?.data)
        }
        throw e
    }
}
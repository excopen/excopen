import {apiClient, ApiException} from "@/shared/lib";
import {EndpointsType, IReview} from "@/shared/types";
import axios from "axios";

export const getReviewsByTourId = async (tourId: number): Promise<IReview[]> => {
    try {
        const response = await apiClient.get<IReview[]>(`${EndpointsType.REVIEWS}/tour`, {
            params: { tourId }
        })
        return response.data
    } catch (e) {
        if (axios.isAxiosError(e)) {
            throw new ApiException<IReview>(e.message, e.response?.status, e.response?.data)
        }
        throw e
    }
}
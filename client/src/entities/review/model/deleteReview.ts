import axios from "axios";
import {apiClient, ApiException} from "@/shared/lib";
import {EndpointsType, IReview} from "@/shared/types";

export const deleteReview = async (id: number): Promise<void> => {
    try {
        await apiClient.delete<IReview>(EndpointsType.REVIEWS, { params: id })
    } catch (e) {
        if (axios.isAxiosError(e)) {
            throw new ApiException<IReview>(e.message, e.response?.status, e.response?.data)
        }
        throw e
    }
}
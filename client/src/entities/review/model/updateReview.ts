import {EndpointsType, IReview} from "@/shared/types";
import {apiClient, ApiException} from "@/shared/lib";
import axios from "axios";

export const updateReview = async (review: IReview): Promise<IReview> => {
    try {
        const {data} = await apiClient.put<IReview>(EndpointsType.REVIEWS, review)
        return data
    } catch (e) {
        if (axios.isAxiosError(e)) {
            throw new ApiException<IReview>(e.message, e.response?.status, e.response?.data)
        }
        throw e
    }
}
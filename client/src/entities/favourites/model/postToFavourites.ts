import axios from "axios";
import {apiClient, ApiException} from "@/shared/lib";
import {ITour} from "@/shared/types";

export const postToFavourites = async (id: number): Promise<ITour> => {
    try {
        const response = await apiClient.post<ITour>('/favourites', {id})
        return response.data
    } catch (e) {
        if (axios.isAxiosError(e)) {
            throw new ApiException<ITour>(
                e.message,
                e.response?.status,
                e.response?.data
            )
        }
        throw e
    }
}
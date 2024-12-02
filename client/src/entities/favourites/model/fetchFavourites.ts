import {apiClient, ApiException} from "@/shared/lib";
import axios from "axios";
import {ITour} from "@/shared/types";

export const fetchFavourites = async (): Promise<ITour[]> => {
    try {
        const response = await apiClient.get<ITour[]>("/favourites");
        return response.data;
    } catch (e) {
        if (axios.isAxiosError(e)) {
            throw new ApiException<ITour>(
                e.message,
                e.response?.status,
                e.response?.data
            );
        }
        throw e
    }
}
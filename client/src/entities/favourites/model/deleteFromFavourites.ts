import axios from "axios";
import {apiClient, ApiException} from "@/shared/lib";
import {ITour} from "@/shared/types";

export const deleteFromFavourites = async (id: number) => {
    try {
        await apiClient.delete(`/favourites${id}`)
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
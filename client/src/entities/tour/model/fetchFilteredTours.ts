import {apiClient, ApiException} from "@/shared/lib";
import axios from "axios";
import {ITour, SearchParamsType} from "@/shared/types";
import {serializeSearchParams} from "src/entities/tour/lib";

export const fetchFilteredTours = async (params: SearchParamsType): Promise<ITour[]> => {
    try {

        const serializedParams = serializeSearchParams(params)

        const response = await apiClient.get<ITour[]>(`/tours`, {params: serializedParams});
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
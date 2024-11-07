import {apiClient} from "@/shared/api/index.ts";
import {ApiException} from "@/shared/utils";
import axios from "axios";

export const fetchData = async <T>(entity: string): Promise<T[]> => {
    try {
        const response = await apiClient.get<T[]>(`${entity}`);
        return response.data;
    } catch (e) {
        if (axios.isAxiosError(e)) {
            throw new ApiException(
                e.message,
                e.response?.status,
                e.response?.data
            );
        } else throw new ApiException("fetch data error");
    }
}
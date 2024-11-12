import {apiClient} from "@/shared/lib/index.ts";
import axios from "axios";
import {ApiException} from "./exceptions.ts";

export const fetchData = async <T>(entity: string) => {
    try {
        const response = await apiClient.get<T[]>(`${entity}`);
        return response.data;
    } catch (e) {
        if (axios.isAxiosError(e)) {
            throw new ApiException<T>(
                e.message,
                e.response?.status,
                e.response?.data
            );
        }
    }
}
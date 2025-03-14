import {EndpointsType, ITag} from "@/shared/types";
import {apiClient, ApiException, isAxiosError} from "@/shared/lib";
import {AxiosResponse} from "axios";

export const getTagsByUser = async (userId: number): Promise<ITag[]> => {
    try {
        const response: AxiosResponse<ITag[]> = await apiClient.get<ITag[]>(`/${EndpointsType.TAGS}/${userId}`)
        return response.data
    } catch (e) {
        if (isAxiosError(e)) {
            throw new ApiException<ITag[]>(e.message, e.response?.status, e.response?.data as ITag[] | undefined)
        }
        throw e
    }
}
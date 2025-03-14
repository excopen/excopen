import {apiClient, ApiException, isAxiosError} from "@/shared/lib";
import {EndpointsType, ITag} from "@/shared/types";

export const addTags = async (userId: number, tags: ITag[]): Promise<void> => {
    try {
        await apiClient.post<number, ITag[]>(`${EndpointsType.TAGS}/`, { userId, tags })
    } catch (e) {
        if (isAxiosError(e)) {
            throw new ApiException<ITag[]>(e.message, e.response?.status, e.response?.data as ITag[] | undefined)
        }
        throw e
    }
}
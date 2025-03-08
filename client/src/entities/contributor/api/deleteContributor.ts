import {apiClient, ApiException, isAxiosError} from "@/shared/lib";
import {EndpointsType, IContributor} from "@/shared/types";

export const deleteContributor = async (id: number): Promise<void> => {
    try {
        await apiClient.delete(EndpointsType.CONTRIBUTOR, { params: { id } })
    } catch (e) {
        if (isAxiosError(e)) {
            throw new ApiException<IContributor>(e.message, e.response?.status, e.response?.data as IContributor | undefined)
        }
        throw e
    }
}
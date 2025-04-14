import {EndpointsType, IContributor} from "@/shared/types";
import {apiClient, ApiException, isAxiosError} from "@/shared/lib";

export const getContributor = async (id: number): Promise<IContributor> => {
    try {
        const response = await apiClient.get<IContributor>(
            EndpointsType.CONTRIBUTOR, { params: { id } }
        )
        return response.data
    } catch (e) {
        if (isAxiosError(e)) {
            throw new ApiException<IContributor>(e.message, e.response?.status, e.response?.data as IContributor | undefined)
        }
        throw e
    }
}
import {EndpointsType, IContributor} from "@/shared/types";
import {apiClient, ApiException, isAxiosError} from "@/shared/lib";

export const addContributor = async (contributor: IContributor): Promise<void> => {
    try {
        await apiClient.post<IContributor>(EndpointsType.CONTRIBUTOR, contributor)
    } catch (e) {
        if (isAxiosError(e)) {
            throw new ApiException<IContributor>(e.message, e.response?.status, e.response?.data as IContributor | undefined)
        }
        throw e
    }
}
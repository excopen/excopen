import {apiClient, ApiException, isAxiosError} from "@/shared/lib";
import {EndpointsType, IUser} from "@/shared/types";

export const loginWithGoogle = async (token: string): Promise<IUser> => {
    try {
        const response = await apiClient.post<IUser>(EndpointsType.AUTH, {token})
        return response.data
    } catch (e) {
        if (isAxiosError(e)) {
            throw new ApiException<IUser>(e.message, e.response?.status, e.response?.data as IUser | undefined)
        }
        throw e
    }
}
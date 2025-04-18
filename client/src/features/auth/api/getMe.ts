import { apiClient, ApiException, isAxiosError } from "@/shared/lib";
import {EndpointsType, IUser} from "@/shared/types";

export const getMe = async (): Promise<IUser> => {
    try {
        const response = await apiClient.get<IUser>(EndpointsType.ME, {
            withCredentials: true
        })
        return response.data
    } catch (e) {
        if (isAxiosError(e)) {
            throw new ApiException<IUser>(e.message, e.response?.status, e.response?.data as IUser | undefined)
        }
        throw e
    }
}
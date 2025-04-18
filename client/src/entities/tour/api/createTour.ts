import {EndpointsType, ITour, IUser} from "@/shared/types";
import {apiClient, ApiException, isAxiosError} from "@/shared/lib";

export const createTour = async (user: IUser, tour: ITour): Promise<void> => {
    try {
        await apiClient.post<ITour>(EndpointsType.TOURS, { user: user, tour: tour })
    } catch (e) {
        if (isAxiosError(e)) {
            throw new ApiException<ITour>(e.message, e.response?.status, e.response?.data as ITour | undefined)
        }
        throw e
    }
}
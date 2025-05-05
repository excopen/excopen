import {EndpointsType, ITour} from "@/shared/types";
import {apiClient, ApiException, isAxiosError} from "@/shared/lib";
import {serializeTourToFormData} from "@/shared/utills";

export const createTour = async (tour: ITour): Promise<void> => {
    try {
        const formData = serializeTourToFormData(tour)
        await apiClient.post<ITour>(`${EndpointsType.TOURS}`, formData)
    } catch (e) {
        if (isAxiosError(e)) {
            throw new ApiException<ITour>(e.message, e.response?.status, e.response?.data as ITour | undefined)
        }
        throw e
    }
}
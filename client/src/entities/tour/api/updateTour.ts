import {apiClient, ApiException, isAxiosError} from "@/shared/lib";
import {EndpointsType, ITour} from "@/shared/types";
import {serializeTourToFormData} from "@/shared/utills";

export const updateTour = async (tour: ITour): Promise<ITour> => {
    try {
        const formData = serializeTourToFormData(tour)
        const response = await apiClient.put<ITour>(EndpointsType.TOURS, formData)
        return response.data
    } catch (e) {
        if (isAxiosError(e)) {
            throw new ApiException<ITour>(e.message, e.response?.status, e.response?.data as ITour | undefined)
        }
        throw e
    }
}
import {EndpointsType, IOrder} from "@/shared/types";
import {apiClient, ApiException, isAxiosError} from "@/shared/lib";
import {serializeOrderToFormData} from "@/shared/utills";

export const createOrder = async (order: IOrder): Promise<void> => {
    try {
        const formData = serializeOrderToFormData(order)
        await apiClient.post<IOrder>(EndpointsType.BOOKING, formData)
    } catch (e) {
        if (isAxiosError(e)) {
            throw new ApiException<IOrder>(e.message, e.response?.status, e.response?.data as IOrder | undefined)
        }
        throw e
    }
}
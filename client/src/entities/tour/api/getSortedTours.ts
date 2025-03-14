import {EndpointsType, ITour, SearchParamsType, SortValues} from "@/shared/types";
import {AxiosResponse} from "axios";
import {apiClient, ApiException, isAxiosError} from "@/shared/lib";

export const getSortedTours = async (sort: SortValues, searchParams: SearchParamsType): Promise<ITour[]> => {
    try {
        const response: AxiosResponse<ITour[]> = await apiClient.get<ITour[]>(EndpointsType.TOURS, {
            params: {
                sort: sort,
                searchParams: searchParams
            }
        })
        return response.data
    } catch (e) {
        if (isAxiosError(e)) {
            throw new ApiException<ITour>(e.message, e.response?.status, e.response?.data as ITour[] | undefined)
        }
        throw e
    }
}
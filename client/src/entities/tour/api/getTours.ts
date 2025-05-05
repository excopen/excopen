import {ITour, SearchParamsType} from "@/shared/types";
import {AxiosResponse} from "axios";
import {apiClient, ApiException, isAxiosError} from "@/shared/lib";

type SearchTourParamsType = {
    sort: string,
    searchParams: SearchParamsType
}

export const getTours = async (searchTourParams: SearchTourParamsType): Promise<ITour[]> => {

    try {

        const { date, location, accessibility, byCity } = searchTourParams.searchParams;

        const params = {
            "_sort": searchTourParams.sort,
            "location.city": location.city,
            "location.region": location.region,
            "date.from": date.from?.toISOString(),
            "date.to": date.to?.toISOString(),
            "accessibility": accessibility,
            "byCity": byCity,
        }

        const response: AxiosResponse<ITour[]> = await apiClient.get<ITour[]>("search", {
            params
        })
        return response.data

    } catch (e) {
        if (isAxiosError(e)) {
            throw new ApiException<ITour>(e.message, e.response?.status, e.response?.data as ITour[] | undefined)
        }
        throw e
    }
}
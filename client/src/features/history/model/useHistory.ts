import {useQuery} from "@tanstack/react-query";
import {ITour} from "@/shared/types";
import {ApiException} from "@/shared/lib";
import {getHistory} from "@/features/history/api";
import {HistoryEndpoint} from "@/features";

export const useHistory = (tourId: number, type: HistoryEndpoint) => {
    return useQuery<ITour[], ApiException<ITour>>({
        queryKey: ["history", tourId],
        queryFn: () => getHistory(tourId, type),
        staleTime: 60_000,
        initialData: [],
        enabled: !!tourId
    })
}
import {useQuery} from "@tanstack/react-query";
import {IContributor} from "@/shared/types";
import {ApiException} from "@/shared/lib";
import {getContributor} from "@/entities/contributor/api";

export const useContributor = (id: number) => {
    return useQuery<IContributor, ApiException<IContributor>>({
        queryKey: ["contributor"],
        queryFn: () => getContributor(id),
        staleTime: 60_000,
        enabled: !!id
    })
}
import {useQuery} from "@tanstack/react-query";
import {IContributor} from "@/shared/types";
import {ApiException} from "@/shared/lib";
import {getContributor} from "@/entities/contributor/api";
import {ContributorObject} from "@/shared/assets/tempData/ContributorObject.ts";

export const useContributor = (id: number) => {
    return useQuery<IContributor, ApiException<IContributor>>({
        queryKey: ["contributor", id],
        queryFn: async (): Promise<IContributor> => {
            const contributor: IContributor = await getContributor(id)
            return contributor ?? ContributorObject
        },
        initialData: ContributorObject,
        staleTime: 60_000,
        enabled: !!id
    })
}
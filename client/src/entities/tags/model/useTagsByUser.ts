import {useQuery} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {getTagsByUser} from "@/entities/tags/api";
import {TagsArray} from "@/shared/assets/tempData/TagsArray.ts";

export const useTagsByUser = (userId: number) => {
    return useQuery<string[], ApiException<string>>({
        queryKey: ["tag", userId],
        queryFn: async () => {
            const tags = await getTagsByUser(userId)
            return tags.length > 0 ? tags : TagsArray
        },
        staleTime: 60_000,
        initialData: TagsArray,
    })
}
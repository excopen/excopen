import {useQuery} from "@tanstack/react-query";
import {ITag} from "@/shared/types";
import {ApiException} from "@/shared/lib";
import {getTags} from "@/entities/tags/api";
import {TagsArray} from "@/shared/assets/tempData/TagsArray.ts";

export const useTags = () => {
    return useQuery<ITag[], ApiException<ITag>>({
        queryKey: ["tag"],
        queryFn: async () => {
            const tags = await getTags()
            return tags.length > 0 ? tags : TagsArray
        },
        staleTime: 60_000,
        initialData: TagsArray,
    })
}
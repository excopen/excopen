import {useQuery} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {getTags} from "@/entities/tags/api";

import {TagsArray} from "@/shared/assets/tempData/TagsArray.ts";

// Выбор из списка тегов

export const useTags = () => {

    const fallback = TagsArray

    return useQuery<string[], ApiException<string>>({
        queryKey: ["tags"],
        queryFn: async () => {
            const tags = await getTags()
            return tags.length > 0 ? tags : fallback
        },
        staleTime: 600_000,
        initialData: fallback,
    })
}
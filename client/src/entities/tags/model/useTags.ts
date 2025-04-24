import {useQuery} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {getTags} from "@/entities/tags/api";

// TODO убрать MOCK теги
import {AllTagsMock} from "@/shared/mocks/AllTagsMock.ts";

export const useTags = () => {

    const fallback = AllTagsMock

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
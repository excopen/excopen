import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {IContributor} from "@/shared/types";
import {deleteContributor} from "@/entities/contributor/api";

export const useDeleteContributor = () => {

    const queryClient = useQueryClient()

    return useMutation<void, ApiException<IContributor>, number>({
        mutationFn: deleteContributor,
        onSuccess: () => queryClient.invalidateQueries({queryKey: ["contributor"]}),
        onError: (e: ApiException<IContributor>) => {
            throw new ApiException<IContributor>(e.message, e.statusCode, e.data)
        }
    })

}
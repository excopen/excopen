import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {IContributor} from "@/shared/types";
import {addContributor} from "@/entities/contributor/api";

export const useAddContributor = () => {

    const queryClient = useQueryClient()

    return useMutation<void, ApiException<IContributor>, IContributor>({
        mutationFn: addContributor,
        onSuccess: () => queryClient.invalidateQueries({queryKey: ["contributor"]}),
        onError: (e: ApiException<IContributor>) => {
            throw new ApiException<IContributor>(e.message, e.statusCode, e.data)
        }
    })

}
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {IContributor} from "@/shared/types";
import {ApiException} from "@/shared/lib";
import {updateContributor} from "@/entities/contributor/api";

export const useUpdateContributor = () => {

    const queryClient = useQueryClient()

    return useMutation<IContributor, ApiException<IContributor>, IContributor>({
        mutationFn: updateContributor,
        onSuccess: () => queryClient.invalidateQueries({queryKey: ["contributor"]}),
        onError: (e: ApiException<IContributor>) => {
            throw new ApiException<IContributor>(e.message, e.statusCode, e.data)
        }
    })

}
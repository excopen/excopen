import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ITour} from "@/shared/types";
import {ApiException} from "@/shared/lib";
import {updateTour} from "@/entities/tour/api";

// Профиль

export const useUpdateTour = () => {

    const queryClient = useQueryClient()

    return useMutation<ITour, ApiException<ITour>, ITour>({
        mutationFn: updateTour,
        onMutate: async (updatedTour) => {

            await queryClient.cancelQueries({ queryKey: ["tour", updatedTour.id] })

            const previous = queryClient.getQueryData<ITour>(["tour", updatedTour.id])
            queryClient.setQueryData(["tour", updatedTour.id], updatedTour)

            return { previous }

        },
        onSuccess: async (updatedTour) => {
            await queryClient.invalidateQueries({ queryKey: ["tour", updatedTour.id] });
            await queryClient.invalidateQueries({ queryKey: ["tours"] });
        },
        onError: (e: ApiException<ITour>) => {
            throw new ApiException<ITour>(e.message, e.statusCode, e.data)
        }
    })

}
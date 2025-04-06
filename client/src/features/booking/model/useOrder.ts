import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {IOrder} from "@/shared/types";
import {createOrder} from "@/features/booking/api";

export const useOrder = () => {

    const queryClient = useQueryClient()

    return useMutation<void, ApiException<IOrder>, IOrder>({
        mutationFn: createOrder,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["tours"]})
        },
        onError: (e: ApiException<IOrder>) => {
            throw new ApiException<IOrder>(e.message, e.statusCode, e.data)
        }
    })

}
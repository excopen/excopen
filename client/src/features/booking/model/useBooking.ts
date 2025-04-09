import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {IOrder} from "@/shared/types";
import {createOrder} from "@/features/booking/api";

// Форма для бронирования

export const useBooking = () => {

    const queryClient = useQueryClient()

    return useMutation<void, ApiException<IOrder>, IOrder>({
        mutationFn: createOrder,
        onMutate: async (order) => {
            await queryClient.cancelQueries({ queryKey: ["user", order.userId] })
        },
        onSuccess: (_, order) => {
            queryClient.invalidateQueries({queryKey: ["user", order.userId]})
        },
        onError: (e: ApiException<IOrder>) => console.error("Не удалось забронировать экскурсию", e.message)
    })

}
import {useMutation} from "@tanstack/react-query";
import {ITour} from "@/shared/types";
import {deleteFromFavourites} from "@/entities";
import {ApiException} from "@/shared/lib";

export const useDeleteFavourite = () => {
    return useMutation<void, ApiException<ITour>, {id: number}>({
        mutationFn: ({id}) => deleteFromFavourites(id),
        onSuccess: () => {
            console.log('Favourites deleted successfully');
        },
        onError: (error) => {
            console.error('Error deleting favourites:', error);
        },
    })
}
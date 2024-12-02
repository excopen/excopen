import {useMutation} from "@tanstack/react-query";
import {ITour} from "@/shared/types";
import {postToFavourites} from "@/entities";
import {ApiException} from "@/shared/lib";

export const usePostFavourite = () => {
    return useMutation<ITour, ApiException<ITour>, {id: number}>({
        mutationFn: ({id}) => postToFavourites(id),
        onSuccess: data => console.log(data),
        onError: error => console.error("API Error:", error.message, error.statusCode, error.data)
    })
}
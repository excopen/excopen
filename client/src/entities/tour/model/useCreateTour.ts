import {useMutation} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {ITour, RouteNames} from "@/shared/types";
import {createTour} from "@/entities/tour/api";
import {useNavigate} from "react-router-dom";
import {createTourStore as store} from "@/features";

export const useCreateTour = () => {

    const navigate = useNavigate()

    return useMutation<void, ApiException<ITour>, ITour>({
        mutationFn: (tour) => createTour(tour),
        onSuccess: () => {
            store.init()
            navigate(`/${RouteNames.SUCCESS}`)
        },
        onError: () => {
            store.init()
            navigate(`/${RouteNames.ERROR}`)
        },
        retry: 3
    })

}
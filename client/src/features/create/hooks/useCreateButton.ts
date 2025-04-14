import {useNavigate} from "react-router-dom";
import {RouteNames} from "@/shared/types";
import {createTourStore as store, useAuthContext} from "@/features";
import {useCreateTour} from "@/entities";

type ReturnType = {
    create: () => void
}

export const useCreateButton = (): ReturnType => {

    const navigate = useNavigate()

    const {userId} = useAuthContext()
    const {mutate: createTour} = useCreateTour()

    const create = () => {
        store.isSubmitted = true
        if (store.isDisabled) {
            store.params.contributorId = userId
            createTour(store.tour)
            navigate(`/${RouteNames.SUCCESS}`)
        }
    }

    return { create }

}
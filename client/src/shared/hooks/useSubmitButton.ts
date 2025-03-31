import {useNavigate} from "react-router-dom";
import {ISubmitted, RouteNames} from "@/shared/types";
import {searchTourStore} from "@/entities";

type ReturnType = {
    click: () => void
}

export const useSearchButton = (store: ISubmitted): ReturnType => {

    const navigate = useNavigate()

    const click = () => {
        store.isSubmitted = true
        if (searchTourStore.isDisabled) {
            navigate(`/${RouteNames.TOURS}/${encodeURIComponent(searchTourStore.location)}`)
        }
    }

    return { click }

}
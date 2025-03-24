import {useNavigate} from "react-router-dom";
import {RouteNames} from "@/shared/types";
import {ButtonState} from "./types.ts";
import {searchTourStore} from "@/entities";

export const useButtonState = (): ButtonState => {

    const navigate = useNavigate()

    const click = () => {
        searchTourStore.isSearch = true
        if (searchTourStore.isDisabled) {
            navigate(`/${RouteNames.TOURS}/${encodeURIComponent(searchTourStore.location)}`)
        }
    }

    return { click }

}
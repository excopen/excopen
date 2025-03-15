import {useSearchContext} from "@/features";
import {useNavigate} from "react-router-dom";
import {RouteNames} from "@/shared/types";
import {ButtonState} from "./types.ts";

export const useButtonState = (): ButtonState => {

    const {context, setIsSearch} = useSearchContext()
    const navigate = useNavigate()

    const disabled: boolean = !!context.searchParams.location
        && !!context.searchParams.date.from
        && !!context.searchParams.date.to
        && !!context.searchParams.accessibility

    const click = () => {
        setIsSearch(true)
        if (disabled) navigate(`/${RouteNames.TOURS}/${encodeURIComponent(context.searchParams.location)}`)
    }

    return { click }

}
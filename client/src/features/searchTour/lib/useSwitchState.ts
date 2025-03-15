import {useSearchContext} from "@/features";
import {SwitchState} from "./types.ts";

export const useSwitchState = (): SwitchState => {
    const {context, setByCity: update} = useSearchContext()
    return { state: context.searchParams.byCity, update }
}
import {SwitchState} from "./types.ts";
import {searchTourStore} from "@/entities";

export const useSwitchState = (): SwitchState => {

    const update = (value: boolean) => {
        searchTourStore.byCity = value
    }

    return { state: searchTourStore.byCity, update }

}
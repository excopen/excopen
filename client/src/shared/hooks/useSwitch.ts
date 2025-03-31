import {IByCity, ISubmitted, SwitchState} from "@/shared/types";

export const useSwitchState = (store: IByCity & ISubmitted): SwitchState => {
    const update = (value: boolean) => {
        store.byCity = value
    }
    return { state: store.byCity, update }
}
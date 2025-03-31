import {ISubmitted, ITourFormatBehavior, SelectTourFormatBehaviorState} from "@/shared/types";
import {useState} from "react";
import {tourFormatBehaviorValues} from "@/shared/config";

export const useTourFormatBehaviorState = (store: ITourFormatBehavior & ISubmitted): SelectTourFormatBehaviorState => {

    const [isTouched, setIsTouched] = useState<boolean>(false)

    const value: string = tourFormatBehaviorValues.find(
        opt => opt.value === store.formatBehavior
    )?.label || ""

    const setValue = (value: string) => {
        store.formatBehavior = value
    }

    const focus = () => setIsTouched(true)

    return { isSubmitted: store.isSubmitted, state: { value, isTouched }, focus, setValue }

}
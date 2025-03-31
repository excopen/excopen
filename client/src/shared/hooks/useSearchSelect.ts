import {
    IAccessibility,
    ISubmitted
} from "@/shared/types";
import {useState} from "react";
import {accessibilityValues} from "@/shared/config";

type ReturnType = {
    isSubmitted: boolean
    state: {
        value: string
        isTouched: boolean
    }
    setValue: (value: string) => void
    focus: () => void
}

export const useAccessibility = (store: IAccessibility & ISubmitted): ReturnType => {

    const [isTouched, setIsTouched] = useState<boolean>(false)
    const value: string = accessibilityValues.find(opt => opt.value === store.accessibility)?.label || ""

    const setValue = (value: string) => store.accessibility = value
    const focus = () => setIsTouched(true)

    return {
        isSubmitted: store.isSubmitted,
        state: { value, isTouched },
        focus, setValue
    }

}
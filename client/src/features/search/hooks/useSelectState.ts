import {SelectState} from "./types.ts";
import {useState} from "react";
import {searchTourStore} from "@/entities";
import {accessibilityValues} from "@/features/search/config";

export const useSelectState = (): SelectState => {

    const [isTouched, setIsTouched] = useState<boolean>(false)

    const value: string = accessibilityValues.find(
        opt => opt.value === searchTourStore.accessibility
    )?.label || ""

    const setValue = (value: string) => {
        searchTourStore.accessibility = value
    }

    const focus = () => setIsTouched(true)

    return { isSearch: searchTourStore.isSearch, state: { value, isTouched }, focus, setValue }

}
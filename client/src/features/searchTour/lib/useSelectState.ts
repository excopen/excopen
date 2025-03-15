import {SelectState} from "./types.ts";
import {useSearchContext} from "@/features";
import {useState} from "react";
import {tourAccessibilityArray} from "@/features/searchTour/config";

export const useSelectState = (): SelectState => {

    const {context, setAccessibility: setValue} = useSearchContext()
    const [isTouched, setIsTouched] = useState<boolean>(false)

    const value: string = tourAccessibilityArray.find(
        opt => opt.value === context.searchParams.accessibility
    )?.label || ""

    const focus = () => setIsTouched(true)

    return { isSearch: context.isSearch, state: { value, isTouched }, focus, setValue }

}
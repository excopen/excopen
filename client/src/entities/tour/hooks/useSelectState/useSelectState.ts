import {useMemo, useState} from "react";
import {SelectState} from "./types.ts";
import {sortTypesArray} from "@/entities/tour/config";
import {SortValues} from "@/shared/types";

export const useSelectState = (): SelectState => {

    const [value, setValue] = useState<string>(SortValues.FOR_POPULAR)

    const label = sortTypesArray.find(
        opt => opt.value === value
    )?.label as string

    const state = useMemo(() => ({
        value, label
    }), [label, value])
    
    return { state, update: setValue }
    
}
import { useState, useEffect } from "react";
import {IDuration, IGroupCapacity, IRouteLength, ISubmitted} from "@/shared/types";

interface ISLider extends IRouteLength, IGroupCapacity, IDuration {}

type ReturnType = {
    state: number
    update: (value: number[]) => void
}

export const useSlider = (store: ISLider & ISubmitted, key: keyof ISLider): ReturnType => {

    const [state, setState] = useState<number>(store[key])

    useEffect(() => setState(store[key]), [store[key]])

    const update = (value: number[]) => {
        store[key] = value[0]
        setState(value[0])
    }

    return { state, update }

}
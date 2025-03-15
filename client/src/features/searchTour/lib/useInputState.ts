import * as React from "react";
import {useState} from "react";

import {useSearchContext} from "@/features";
import {useLocations} from "@/entities";

import {FieldState, InputState} from "./types.ts";
import {validateByCity} from "./validateByCity.ts";

export const useInputState = (): InputState => {

    const { context, setLocation } = useSearchContext()
    const {data: locations} = useLocations()

    const [state, setState] = useState<FieldState>({
        isOpen: false,
        isTouched: false,
        isCorrected: true,
    })

    const updateField = (newValue: string) => {
        setLocation(newValue)
        setState({
            isTouched: true,
            isOpen: true,
            isCorrected: validateByCity(newValue, locations),
        })
    }

    const clickInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value
        updateField(inputValue)
    }

    const selectCity = (city: string) => {
        updateField(city)
        setState((prev) => ({ ...prev, isOpen: false }))
    }

    const focus = () => {
        setState((prev) => ({ ...prev, isOpen: true }))
    }

    const blur = () => {
        if (!state.isOpen && context.searchParams.location === "") {
            setState((prev) => ({ ...prev, isTouched: true }))
        }
    }

    const clear = () => setLocation("")

    const close = () => setState((prev) => ({
        ...prev,
        isOpen: false,
        isTouched: prev.isTouched && context.searchParams.location === "",
    }))

    return { isSearch: context.isSearch, state, clickInput, selectCity, focus, blur, clear, close }

}
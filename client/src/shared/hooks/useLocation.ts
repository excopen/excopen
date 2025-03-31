import * as React from "react";
import {useState} from "react";

import {useLocations} from "@/entities";
import {ILocationTour, InputFieldState, InputState, ISubmitted} from "@/shared/types";
import {validateByCity} from "@/shared/validate";

export const useLocationInputState = (store: ILocationTour & ISubmitted): InputState => {

    const {data: locations} = useLocations()

    const [state, setState] = useState<InputFieldState>({
        isOpen: false,
        isTouched: false,
        isCorrected: true,
    })

    const updateField = (newValue: string) => {
        store.location = newValue
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
        if (!state.isOpen && store.location === "") {
            setState((prev) => ({ ...prev, isTouched: true }))
        }
    }

    const clear = () => {
        store.location = ""
    }

    const close = () => setState((prev) => ({
        ...prev,
        isOpen: false,
        isTouched: prev.isTouched && store.location === "",
    }))

    return {
        isSubmitted: store.isSubmitted,
        value: store.location,
        state,
        clickInput,
        selectCity,
        focus,
        blur,
        clear,
        close
    }

}
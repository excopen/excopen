import * as React from "react";
import {useState} from "react";

import {searchTourStore, useLocations} from "@/entities";
import {FieldState, InputState} from "./types.ts";
import {validateByCity} from "./validateByCity.ts";

export const useInputState = (): InputState => {

    const {data: locations} = useLocations()

    const [state, setState] = useState<FieldState>({
        isOpen: false,
        isTouched: false,
        isCorrected: true,
    })

    const updateField = (newValue: string) => {
        searchTourStore.location = newValue
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
        if (!state.isOpen && searchTourStore.location === "") {
            setState((prev) => ({ ...prev, isTouched: true }))
        }
    }

    const clear = () => {
        searchTourStore.location = ""
    }

    const close = () => setState((prev) => ({
        ...prev,
        isOpen: false,
        isTouched: prev.isTouched && searchTourStore.location === "",
    }))

    return {
        isSearch: searchTourStore.isSearch,
        value: searchTourStore.location,
        state,
        clickInput,
        selectCity,
        focus,
        blur,
        clear,
        close
    }

}
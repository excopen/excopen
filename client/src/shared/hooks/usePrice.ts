import * as React from "react";
import {useState} from "react";

import {IPrice, ISubmitted, PriceInputState, PriceState} from "@/shared/types";
import {cleanPriceInputValue, formatNumberWithSpaces} from "@/shared/config";

export const usePriceState = (store: IPrice & ISubmitted): PriceInputState => {

    const [state, setState] = useState<PriceState>({
        isOpen: false,
        isTouched: false,
    })

    const updateField = (newValue: string) => {
        store.price = cleanPriceInputValue(newValue)
        setState({
            isTouched: true,
            isOpen: true
        })
    }

    const clickInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value
        updateField(inputValue)
    }

    const focus = () => {
        setState((prev) => ({ ...prev, isOpen: true }))
    }

    const blur = () => {
        if (!state.isOpen && store.price === 0) {
            setState((prev) => ({ ...prev, isTouched: true }))
        }
    }

    const clear = () => {
        store.price = 0
    }

    const close = () => setState((prev) => ({
        ...prev,
        isOpen: false,
        isTouched: prev.isTouched && store.price === 0,
    }))

    const displayValue: string = store.price === 0
        ? ""
        : state.isOpen
            ? store.price.toString()
            : `${formatNumberWithSpaces(store.price)} ₽`

    return {
        isSubmitted: store.isSubmitted,
        value: displayValue,
        state,
        clickInput, focus, blur, clear, close
    }

}
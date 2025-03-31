import * as React from "react";
import {useState} from "react";

import {IContact, ISubmitted, SocialState} from "@/shared/types";
import {SocialStateInput} from "@/shared/types/ui/SocialStateInput.ts";
import {phoneMask} from "@/shared/config";
import {validatePhoneLen} from "@/shared/validate";

export const usePhoneState = (store: IContact & ISubmitted): SocialStateInput => {

    const [state, setState] = useState<SocialState>({
        isOpen: false,
        isTouched: false,
        isCorrected: true
    })

    const updateField = (newValue: string) => {
        store.phone = newValue
        setState({
            ...state,
            isTouched: true,
            isOpen: true
        })
    }

    const clickInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value
        updateField(phoneMask(inputValue))
    }

    const focus = () => {
        setState((prev) => ({ ...prev, isOpen: true }))
    }

    const blur = () => {
        if (!state.isOpen && store.phone === "") {
            setState((prev) => ({
                ...prev,
                isTouched: true
            }))
        }
    }

    const clear = () => {
        store.phone = ""
    }

    const close = () => setState((prev) => ({
        ...prev,
        isOpen: false,
        isTouched: prev.isTouched && store.phone === "",
        isCorrected: !validatePhoneLen(store.phone)
    }))

    return {
        isSubmitted: store.isSubmitted,
        value: store.phone,
        state,
        clickInput, focus, blur, clear, close
    }

}
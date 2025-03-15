import * as React from "react";
import {RangeType} from "@/shared/types";

export type FieldState = {
    isOpen: boolean
    isTouched: boolean
    isCorrected: boolean
}

export type InputState = {
    isSearch: boolean
    state: FieldState
    clickInput: (e: React.ChangeEvent<HTMLInputElement>) => void
    selectCity: (city: string) => void
    focus: () => void
    blur: () => void
    clear: () => void
    close: () => void
}

export type CalendarButtonState = {
    range: RangeType
    isOpen: boolean
    isTouched: boolean
}

export type DatePickerState = {
    isSearch: boolean
    state: CalendarButtonState
    select: (selectedRange: RangeType | undefined) => void
    setIsOpen: (isOpen: boolean) => void
    click: () => void
    clear: () => void
}

export type AccessibilityState = {
    value: string
    isTouched: boolean
}

export type SelectState = {
    isSearch: boolean
    state: AccessibilityState
    setValue: (value: string) => void
    focus: () => void
}

export type ButtonState = {
    click: () => void
}

export type SwitchState = {
    state: boolean
    update: (value: boolean) => void
}
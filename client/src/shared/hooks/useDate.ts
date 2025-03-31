import {useEffect, useState} from "react";
import {DatePickerState, IDate, ISubmitted, RangeType} from "@/shared/types";

export const useDateState = (store: IDate & ISubmitted): DatePickerState => {

    const [range, setRange] = useState<RangeType>(store.date)

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isTouched, setIsTouched] = useState<boolean>(false)

    useEffect(() => {
        store.date = range
    }, [range])

    const select = (selectedRange: RangeType | undefined) => {
        if (selectedRange) setRange(selectedRange)
        if (selectedRange && selectedRange.to) setIsOpen(false)
    }

    const clear = () => setRange({ from: undefined, to: undefined })

    const click = () => {
        setIsTouched(true)
        setIsOpen(true)
    }

    return {
        isSubmitted: store.isSubmitted,
        state: { isOpen, range, isTouched },
        setIsOpen, select, click, clear
    }

}
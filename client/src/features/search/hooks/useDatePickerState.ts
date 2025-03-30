import {useEffect, useState} from "react";
import {DatePickerState} from "./types.ts";
import {RangeType} from "@/shared/types";
import {searchTourStore} from "@/entities";

export const useDatePickerState = (): DatePickerState => {

    const [range, setRange] = useState<RangeType>(searchTourStore.date)

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isTouched, setIsTouched] = useState<boolean>(false)

    useEffect(() => {
        searchTourStore.date = range
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
        isSearch: searchTourStore.isSearch,
        state: { isOpen, range, isTouched },
        setIsOpen, select, click, clear
    }

}
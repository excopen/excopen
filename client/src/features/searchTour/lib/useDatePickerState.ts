import {useEffect, useState} from "react";
import {useSearchContext} from "@/features";

import {DatePickerState} from "./types.ts";
import {RangeType} from "@/shared/types";

export const useDatePickerState = (): DatePickerState => {

    const { context, setDate } = useSearchContext()
    const [range, setRange] = useState<RangeType>(context.searchParams.date)

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isTouched, setIsTouched] = useState<boolean>(false)

    useEffect(() => setDate(range), [range, setDate])

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
        isSearch: context.isSearch,
        state: { isOpen, range, isTouched },
        setIsOpen, select, click, clear
    }

}
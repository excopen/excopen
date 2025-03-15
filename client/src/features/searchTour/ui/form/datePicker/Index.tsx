import {FC} from "react";
import { Calendar, Popover, PopoverContent, PopoverTrigger } from "@/shared/ui";
import { CalendarButton } from "./CalendarButton.tsx";
import {useDatePickerState} from "@/features/searchTour/lib";

export const Index: FC = () => {

    const {isSearch, state, setIsOpen, select, click, clear} = useDatePickerState()

    return (
        <Popover open={state.isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger role={"form-datePicker"} asChild>
                <CalendarButton
                    state={state}
                    isSearch={isSearch}
                    onClick={click}
                    onClear={clear}
                />
            </PopoverTrigger>
            <PopoverContent side={"bottom"}>
                <Calendar
                    defaultMonth={state.range.to}
                    mode="range"
                    selected={state.range}
                    onSelect={select}
                    initialFocus
                    disabled={date => date < new Date() || date < new Date("1900-01-01")}
                />
            </PopoverContent>
        </Popover>
    );
};
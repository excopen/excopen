import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui";
import { FC, useEffect, useState } from "react";
import {TourAccessibility} from "@/shared/types";

type SelectAccessibilityProps = {
    defaultValue: TourAccessibility
    onChangeValue: (value: TourAccessibility) => void
    options: {value: TourAccessibility, label: string}[]
};

export const SelectAccessibility: FC<SelectAccessibilityProps> = ({ defaultValue, onChangeValue, options }) => {

    const [value, setValue] = useState<TourAccessibility>(defaultValue);

    const clickHandler = (value: TourAccessibility) => {
        setValue(value);
    };

    useEffect(() => {
        onChangeValue(value);
    }, [value]);

    return (
        <Select value={value} onValueChange={clickHandler}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="участники" />
            </SelectTrigger>
            <SelectContent>
                {options.map((tour, key) =>
                    <SelectItem key={key} value={tour.value}>
                        {tour.label}
                    </SelectItem>
                )}
            </SelectContent>
        </Select>
    );
};

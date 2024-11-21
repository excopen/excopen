import { FC, useEffect, useState } from "react";
import {TourAccessibility} from "@/shared/types";
import {Select, SelectItem, SelectTrigger, SelectValue, SelectContent} from "@/shared/ui";

type SelectAccessibilityProps = {
    defaultValue?: TourAccessibility
    onChangeValue: (value: TourAccessibility) => void
    options: {value: TourAccessibility, label: string}[]
};

export const SelectAccessibility: FC<SelectAccessibilityProps> = ({ defaultValue, onChangeValue, options }) => {

    const [value, setValue] = useState<TourAccessibility | undefined>(defaultValue);

    const clickHandler = (value: TourAccessibility) => {
        setValue(value);
    };

    useEffect(() => {
        if (value !== undefined) onChangeValue(value);
    }, [value, onChangeValue]);

    return (
        <Select value={value} onValueChange={clickHandler}>
            <SelectTrigger>
                <SelectValue placeholder="Участники" />
            </SelectTrigger>
            <SelectContent side={"bottom"}>
                {options.map((tour, key) =>
                    <SelectItem key={key} value={tour.value}>
                        {tour.label}
                    </SelectItem>
                )}
            </SelectContent>
        </Select>
    );
};

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui";
import { FC, useEffect, useState } from "react";
import { useDebounceValue } from "usehooks-ts";
import {tourAccessibilityArray} from "@/widgets/searchTourBar/utils";

type SelectAccessibilityProps = {
    setter: (value: string) => void;
};

export const SelectAccessibility: FC<SelectAccessibilityProps> = ({ setter }) => {

    const [value, setValue] = useState<string>("");

    const clickHandler = (value: string) => {
        setValue(value);
    };

    const [debouncedValue] = useDebounceValue<string>(value, 500);

    useEffect(() => {
        setter(debouncedValue);
    }, [debouncedValue]);

    return (
        <Select value={value} onValueChange={clickHandler}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="участники" />
            </SelectTrigger>
            <SelectContent>
                {tourAccessibilityArray.map(tour =>
                    <SelectItem value={tour.value}>
                        {tour.label}
                    </SelectItem>
                )}
            </SelectContent>
        </Select>
    );
};

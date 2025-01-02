import {
    Command,
    CommandContainer,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandList,
} from "@/shared/ui";
import * as React from "react";
import { FC, useEffect, useRef, useState } from "react";
import { locationsArray, validateCity } from "@/widgets/form/utils";
import { useOnClickOutside } from "usehooks-ts";
import { CommandLocation } from "./CommandLocation.tsx";
import { useSearchTourContext } from "@/features";

export const Index: FC = () => {

    const [value, setValue] = useState<string>("")
    const { setLocation } = useSearchTourContext()

    const [field, setField] = useState({
        isOpen: false,
        isTouched: false,
        isCorrectedField: true
    })

    const commandRef = useRef<HTMLDivElement>(null);

    const updateField = (newValue: string) => {
        setValue(newValue);
        setField({isTouched: true, isOpen: true, isCorrectedField: validateCity(newValue)})
    };

    const clickInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        updateField(inputValue);
    };

    const clickCommandItemHandler = (city: string) => {
        updateField(city);
        setField(prev => ({ ...prev, isOpen: false }));
    };

    const focusHandler = () => {
        setField(prev => ({ ...prev, isOpen: true }))
    }

    const blurHandler = () => {
        if (!field.isOpen && value === "") {
            setField(prev => ({ ...prev, isTouched: true }));
        }
    }

    const clearValue = () => {
        setValue("")
    };

    useEffect(() => {
        setLocation(value);
    }, [value, setLocation]);

    useOnClickOutside(commandRef, () => {
        setField(prev => ({
                ...prev,
                isOpen: false,
                isTouched: value === "" ? false : prev.isTouched
        }))
    });

    return (
        <Command ref={commandRef}>
            <CommandInput
                field={field}
                value={value}
                onClear={clearValue}
                onChangeCapture={clickInputHandler}
                label={"Где искать"}
                onFocus={focusHandler}
                onBlur={blurHandler}
            />
            <CommandContainer isOpen={field.isOpen}>
                <CommandList>
                    <CommandEmpty>
                        Направления не найдены
                    </CommandEmpty>
                    <CommandGroup heading="Направления">
                        {locationsArray.map(location => (
                            <CommandLocation
                                key={location.city}
                                onClick={() => clickCommandItemHandler(location.city)}
                                location={location}
                            />
                        ))}
                    </CommandGroup>
                </CommandList>
            </CommandContainer>
        </Command>
    );
};
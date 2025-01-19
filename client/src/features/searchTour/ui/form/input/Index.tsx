import * as React from "react";
import { FC, useEffect, useRef, useState } from "react";
import {useOnClickOutside} from "usehooks-ts";
import {
    Command,
    CommandContainer,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandList,
    CommandLocation,
} from "@/shared/ui";
import {locationsArray} from "@/shared/assets/tempData/LocationsArray.ts";
import {validateByCity} from "@/features/searchTour/lib";
import {useSearchContext} from "@/features";

export const Index: FC = () => {

    const { searchParams, setLocation, isSearch } = useSearchContext()

    const [value, setValue] = useState<string>(searchParams.location)

    const [field, setField] = useState({
        isOpen: false,
        isTouched: false,
        isCorrectedField: true
    })

    const commandRef = useRef<HTMLDivElement>(null);

    const updateField = (newValue: string) => {
        setValue(newValue);
        setField({isTouched: true, isOpen: true, isCorrectedField: validateByCity(newValue)})
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
        setLocation(value)
    }, [value, setLocation]);

    useEffect(() => {
        if (searchParams.location !== value) setValue(searchParams.location)
    }, [searchParams.location, value]);

    useOnClickOutside(commandRef, () => {
        setField(prev => (
            {...prev, isOpen: false, isTouched: value === "" ? false : prev.isTouched}
        ))
    });

    return (
        <Command ref={commandRef}>
            <CommandInput
                isSearch={isSearch}
                field={field}
                value={value}
                label={"Где искать"}
                onClear={clearValue}
                onChangeCapture={clickInputHandler}
                onFocus={focusHandler}
                onBlur={blurHandler}
            />
            <CommandContainer isOpen={field.isOpen}>
                <CommandList>
                    <CommandEmpty>
                        Направления не найдены
                    </CommandEmpty>
                    <CommandGroup heading={"Направления"}>
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
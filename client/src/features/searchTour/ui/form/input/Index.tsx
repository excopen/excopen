import {FC, useRef} from "react";
import { useOnClickOutside } from "usehooks-ts";
import {
    Command,
    CommandContainer,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandList,
    CommandLocation,
} from "@/shared/ui";
import {useInputState} from "@/features/searchTour/lib";
import {useLocations} from "@/entities";

export const Index: FC = () => {

    const {data: locations} = useLocations()

    const {
        isSearch,
        state,
        value,
        clickInput, selectCity, focus, blur, clear, close
    } = useInputState()

    const commandRef = useRef<HTMLDivElement>(null)
    useOnClickOutside(commandRef,close)

    return (
        <Command role={"form-command"} ref={commandRef}>
            <CommandInput
                isSearch={isSearch}
                field={state}
                value={value}
                label={"Где искать"}
                onClear={clear}
                onChangeCapture={clickInput}
                onFocus={focus}
                onBlur={blur}
                data-is-corrected={state.isCorrected}
            />
            <CommandContainer isOpen={state.isOpen}>
                <CommandList>
                    <CommandEmpty>Направления не найдены</CommandEmpty>
                    <CommandGroup heading={"Направления"}>
                        {locations.map((location) => (
                            <CommandLocation
                                key={location.city}
                                onClick={() => selectCity(location.city)}
                                location={location}
                            />
                        ))}
                    </CommandGroup>
                </CommandList>
            </CommandContainer>
        </Command>
    );
};
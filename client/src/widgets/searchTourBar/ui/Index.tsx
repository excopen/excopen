import {FC} from "react";
import {useSearchTourContext} from "@/features/searchTour";
import {
    Calendar,
    SearchButton,
    SearchByLocationInput,
    SwitchByCity
} from "@/shared/ui";
import {SelectAccessibility} from "./SelectAccessibility.tsx";
import {RouteNames} from "@/shared/types";

export const SearchTourBar: FC = () => {

    const {
        setLocation,
        setAccessibility,
        setByCity,
        searchParams
    } = useSearchTourContext()

    const disabled =
        !searchParams.location &&
        !searchParams.date &&
        !searchParams.accessibility &&
        !searchParams.byCity

    return (
        <div>
            <div>
                <SearchByLocationInput setter={setLocation}/>
                <Calendar/>
                <SelectAccessibility setter={setAccessibility}/>
                <SearchButton disabled={disabled} path={RouteNames.TOURS}>
                    Искать
                </SearchButton>
            </div>
            <div>
                <SwitchByCity setter={setByCity}/>
            </div>
        </div>
    );
};
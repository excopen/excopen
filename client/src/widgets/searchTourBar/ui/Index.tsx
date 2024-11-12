import {FC} from "react";
import {useSearchTourContext} from "@/features/searchTour";
import {
    Calendar,
    SearchButton,
    SearchByLocationInput,
    SwitchByCity
} from "@/shared/ui";
import {SelectAccessibility} from "./SelectAccessibility.tsx";
import {RouteNames, TourAccessibility} from "@/shared/types";
import {tourAccessibilityArray} from "@/widgets/searchTourBar/utils";

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
                <SearchByLocationInput onChangeValue={setLocation}/>
                <Calendar/>
                <SelectAccessibility
                    defaultValue={TourAccessibility.WITHOUT_CHILDREN}
                    options={tourAccessibilityArray}
                    onChangeValue={setAccessibility}
                />
                <SearchButton disabled={disabled} path={RouteNames.TOURS}>
                    Искать
                </SearchButton>
            </div>
            <div>
                <SwitchByCity onChangeValue={setByCity}/>
            </div>
        </div>
    );
};
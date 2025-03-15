import {Select, SelectAccessibilityTrigger, SelectContent, SelectItem} from "@/shared/ui";
import {tourAccessibilityArray} from "@/features/searchTour/config";
import {useSelectState} from "@/features/searchTour/lib";

export const Index = () => {

    const {isSearch, state, focus, setValue} = useSelectState()

    return (
        <Select value={state.value} onValueChange={setValue}>
            <SelectAccessibilityTrigger
                placeholder={"Участники"}
                isSearch={isSearch}
                value={state.value}
                isTouched={state.isTouched}
                onFocus={focus}
            />
            <SelectContent side={"bottom"}>
                {tourAccessibilityArray.map((tour) =>
                    <SelectItem key={tour.value} value={tour.value}>
                        {tour.label}
                    </SelectItem>
                )}
            </SelectContent>
        </Select>
    );
};
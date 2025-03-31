import {Select, SelectAccessibilityTrigger, SelectContent, SelectItem} from "@/shared/ui";
import {observer} from "mobx-react-lite";
import {accessibilityValues as values} from "@/shared/config";
import {searchTourStore} from "@/entities";
import {useAccessibility} from "@/shared/hooks";

export const SelectAccessibility = observer(() => {

    const {
        isSubmitted,
        state,
        focus, setValue
    } = useAccessibility(searchTourStore)

    return (
        <Select value={state.value} onValueChange={setValue}>
            <SelectAccessibilityTrigger
                isSearch={isSubmitted}
                value={state.value}
                isTouched={state.isTouched}
                onFocus={focus}
            />
            <SelectContent side={"bottom"}>
                {values.map((tour) =>
                    <SelectItem key={tour.value} value={tour.value}>
                        {tour.label}
                    </SelectItem>
                )}
            </SelectContent>
        </Select>
    );
})
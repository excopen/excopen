import {Select, SelectAccessibilityTrigger, SelectContent, SelectItem} from "@/shared/ui";
import {accessibilityValues as values} from "@/shared/config";
import {useSelect} from "@/shared/hooks";
import {createTourStore} from "@/features/createTour/store";
import {observer} from "mobx-react-lite";

export const Accessibility = observer(() => {

    const {
        isSubmitted,
        state,
        focus, setValue
    } = useSelect(createTourStore, "accessibility", values)

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
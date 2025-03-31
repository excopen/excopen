import {Select, SelectContent, SelectItem, SelectTourFormatBehaviorTrigger} from "@/shared/ui";
import {tourFormatBehaviorValues as values} from "@/shared/config";
import {useSelect} from "@/shared/hooks";
import {createTourStore} from "@/features/createTour/store";
import {observer} from "mobx-react-lite";

export const FormatBehavior = observer(() => {

    const {
        isSubmitted,
        state,
        focus, setValue
    } = useSelect(createTourStore, "formatBehavior", values)

    return (
        <Select value={state.value} onValueChange={setValue}>
            <SelectTourFormatBehaviorTrigger
                isSearch={isSubmitted}
                value={state.value}
                isTouched={state.isTouched}
                onFocus={focus}
            />
            <SelectContent className={"h-40"} side={"bottom"}>
                {values.map((tour) =>
                    <SelectItem key={tour.value} value={tour.value}>
                        {tour.label}
                    </SelectItem>
                )}
            </SelectContent>
        </Select>
    );
})
import {Select, SelectContent, SelectItem, SelectTourFormatTrigger} from "@/shared/ui";
import {tourFormatValues as values} from "@/shared/config";
import {useSelect} from "@/shared/hooks";
import {createTourStore} from "@/features/createTour/store";
import {observer} from "mobx-react-lite";

export const Format = observer(() => {

    const {
        isSubmitted,
        state,
        focus, setValue
    } = useSelect(createTourStore, "format", values)

    return (
        <Select value={state.value} onValueChange={setValue}>
            <SelectTourFormatTrigger
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
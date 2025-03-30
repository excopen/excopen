import {Select, SelectAccessibilityTrigger, SelectContent, SelectItem} from "@/shared/ui";
import {observer} from "mobx-react-lite";
import {useSelectState} from "@/features/search/hooks";
import {accessibilityValues} from "@/features/search/config";

export const Index = observer(() => {

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
                {accessibilityValues.map((tour) =>
                    <SelectItem key={tour.value} value={tour.value}>
                        {tour.label}
                    </SelectItem>
                )}
            </SelectContent>
        </Select>
    );
})
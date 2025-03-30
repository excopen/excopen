import {FC} from 'react';
import {Select, SelectContent, SelectItem, SelectSortTrigger} from "@/shared/ui";
import {useSelectState} from "@/entities/tour/hooks";
import {sortTypesArray} from "@/entities/tour/config";

export const Index: FC = () => {

    const { state, update } = useSelectState()

    return (
        <Select value={state.value} onValueChange={update}>
            <SelectSortTrigger role={"button"} value={state.label} placeholder={state.label}/>
            <SelectContent side={"bottom"}>
                {sortTypesArray.map((tour) =>
                    <SelectItem key={tour.value} value={String(tour.value)}>
                        {tour.label}
                    </SelectItem>
                )}
            </SelectContent>
        </Select>
    );

};
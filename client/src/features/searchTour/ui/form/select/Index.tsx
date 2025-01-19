import users from "@/shared/assets/icons/users.svg";
import {Select, SelectAccessibilityTrigger, SelectContent, SelectItem} from "@/shared/ui";
import {tourAccessibilityArray} from "@/features/searchTour/config";
import {useSearchContext} from "@/features";

export const Index = () => {

    const {searchParams, isSearch, setAccessibility} = useSearchContext()

    const label = tourAccessibilityArray.find(
        opt => opt.value === searchParams.accessibility
    )?.label

    return (
        <Select value={searchParams.accessibility} onValueChange={setAccessibility}>
            <SelectAccessibilityTrigger
                icon={users}
                isSearch={isSearch}
                value={label}
                placeholder={"Участники"}
            />
            <SelectContent side={"bottom"}>
                {tourAccessibilityArray.map((tour) =>
                    <SelectItem key={tour.value} value={String(tour.value)}>
                        {tour.label}
                    </SelectItem>
                )}
            </SelectContent>
        </Select>
    );
};
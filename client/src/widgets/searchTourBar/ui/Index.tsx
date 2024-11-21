import {FC} from "react";
import {useSearchTourContext} from "@/features/searchTour";
import {SelectAccessibility} from "./components/SelectAccessibility.tsx";
import {Orientation, RouteNames, TourAccessibility} from "@/shared/types";
import {tourAccessibilityArray} from "@/widgets/searchTourBar/utils";
import {Container, SubContainerBottom, SubContainerTop} from "@/widgets/searchTourBar/ui/containers";
import {DatePicker, Heading, Input, SearchButton, SwitchByCity} from "@/widgets/searchTourBar/ui/components";

type SearchTourBarProps = {
    orientation: Orientation
}

export const SearchTourBar: FC<SearchTourBarProps> = ({orientation}) => {

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
        <Container orientation={orientation}>
            <SubContainerTop orientation={orientation}>
                <Heading value={"Куда теперь?"} orientation={orientation}/>
                <Input
                    onChangeValue={setLocation}
                />
                <DatePicker/>
                <SelectAccessibility
                    defaultValue={TourAccessibility.WITHOUT_CHILDREN}
                    options={tourAccessibilityArray}
                    onChangeValue={setAccessibility}
                />
                {
                    orientation === Orientation.VERTICAL
                        ?
                        <SubContainerBottom orientation={orientation}>
                            <SwitchByCity onChangeValue={setByCity} />
                        </SubContainerBottom>
                        :
                        null
                }
                <SearchButton
                    orientation={orientation}
                    path={RouteNames.TOURS}
                    disabled={disabled}
                />
            </SubContainerTop>
            {
                orientation === Orientation.HORIZONTAL
                    ?
                    <SubContainerBottom orientation={orientation}>
                        <SwitchByCity onChangeValue={setByCity} />
                    </SubContainerBottom>
                    :
                    null
            }
        </Container>
    );
};
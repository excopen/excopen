import {FC} from "react";
import {useSearchTourContext} from "@/features/searchTour";
import {Orientation, RouteNames, TourAccessibility} from "@/shared/types";
import {tourAccessibilityArray} from "@/widgets/form/utils";
import {Container, Header, Bottom} from "@/widgets/form/ui/containers";
import {DatePicker, Heading, Input, SearchButton, SwitchByCity} from "@/widgets/form/ui/components";
import {SelectParams, SelectType} from "@/shared/ui";

type FormProps = {
    orientation: Orientation
}

export const Index: FC<FormProps> = ({orientation}) => {

    const {
        setLocation,
        setAccessibility,
        setByCity,
        setDate,
        searchParams
    } = useSearchTourContext()

    const disabled =
        !!searchParams.location &&
        !!searchParams.date

    return (
        <Container orientation={orientation}>
            <Header orientation={orientation}>
                <Heading value={"Куда теперь?"} orientation={orientation}/>
                <Input onChangeValue={setLocation}/>
                <DatePicker onChange={setDate}/>
                <SelectParams
                    defaultValue={TourAccessibility.WITHOUT_CHILDREN}
                    onChangeValue={setAccessibility}
                    options={tourAccessibilityArray}
                    placeholder={"Участники"}
                    selectType={SelectType.ACCESSIBILITY}
                />
                {
                    orientation === Orientation.VERTICAL
                        ?
                        <Bottom orientation={orientation}>
                            <SwitchByCity onChangeValue={setByCity} />
                        </Bottom>
                        :
                        null
                }
                <SearchButton
                    orientation={orientation}
                    path={RouteNames.TOURS}
                    disabled={disabled}
                />
            </Header>
            {
                orientation === Orientation.HORIZONTAL
                    ?
                    <Bottom orientation={orientation}>
                        <SwitchByCity onChangeValue={setByCity} />
                    </Bottom>
                    :
                    null
            }
        </Container>
    );
};
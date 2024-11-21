import {FC} from "react";
import {SearchTourBar} from "@/widgets";
import {HomePageContainer, Title} from "@/shared/conponents";
import {useOrientation} from "@/shared/hooks";
import {Orientation} from "@/shared/types";
import {LocationsList} from "@/widgets/locationsList";

export const HomePage: FC = () => {

    const orientation = useOrientation(Orientation.HORIZONTAL)

    return (
        <HomePageContainer>
            <Title/>
            <SearchTourBar orientation={orientation}/>
            <LocationsList/>
        </HomePageContainer>
    );
};
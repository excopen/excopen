import {FC} from "react";
import {LocationsList, SearchTourBar} from "@/widgets";
import {useOrientation} from "@/shared/hooks";
import {Orientation} from "@/shared/types";
import {HomePageContainer, Title} from "@/shared/components";

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
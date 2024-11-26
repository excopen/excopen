import {FC} from "react";
import {useOrientation} from "@/shared/hooks";
import {Orientation} from "@/shared/types";
import {SearchTourBar, TourList} from "@/widgets";
import {SideBar, ToFavLink, ToursPageContainer} from "@/shared/conponents";

export const ToursPage: FC = () => {

    const orientation = useOrientation(Orientation.VERTICAL)

    return (
        <ToursPageContainer>
            <SideBar>
                <SearchTourBar orientation={orientation}/>
                <ToFavLink/>
            </SideBar>
            <TourList/>
        </ToursPageContainer>
    );
};
import {FC} from "react";
import {TourHeader} from "@/widgets/tourHeader";
import {TourObject} from "@/widgets/tourList/assets/TourObject.ts";
import {TourPageContainer, TourPageMain} from "@/shared/conponents";
import {TourCarousel, TourDescription, TourSidebar} from "@/widgets";

export const TourPage: FC = () => {
    return (
        <TourPageContainer>
            <TourHeader tour={TourObject}/>
            <TourCarousel images={TourObject.images} map={TourObject.map} />
            <TourPageMain>
                <TourDescription tour={TourObject}/>
                <TourSidebar tour={TourObject}/>
            </TourPageMain>
        </TourPageContainer>
    );
};
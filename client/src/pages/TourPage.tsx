import {FC} from "react";
import {TourHeader} from "@/widgets/tourHeader";
import {TourCarousel, TourDescription, TourSidebar} from "@/widgets";
import {TourPageContainer, TourPageMain} from "@/shared/components";
import {TourObject} from "@/shared/assets/tempData/TourObject.ts";

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
import {FC} from "react";
import {TourHeader} from "@/widgets/tourHeader";
import {TourObject} from "@/widgets/tourList/assets/TourObject.ts";
import {TourCarousel, TourDescription, TourSidebar} from "@/widgets";
import {TourPageContainer, TourPageMain} from "@/shared/components";

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
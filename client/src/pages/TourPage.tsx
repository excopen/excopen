import {FC} from "react";
import {TourHeader} from "@/widgets/tourHeader";
import {Carousel, TourDescription, Sidebar} from "@/widgets";
import {TourObject} from "@/shared/assets/tempData/TourObject.ts";
import pages from "@/app/styles/pages.module.css"
import containers from "@/app/styles/containers.module.css"

export const TourPage: FC = () => {
    return (
        <div className={pages.tour}>
            <TourHeader tour={TourObject}/>
            <Carousel images={TourObject.images} map={TourObject.map}/>
            <div className={containers.tourMain}>
                <TourDescription tour={TourObject}/>
                <Sidebar tour={TourObject}/>
            </div>
        </div>
    );
};
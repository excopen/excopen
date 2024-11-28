import {FC} from "react";
import {TourHeader} from "@/widgets/tourHeader";
import {TourCarousel, TourDescription, TourSidebar} from "@/widgets";
import {TourObject} from "@/shared/assets/tempData/TourObject.ts";
import style from "@/app/styles/pages.module.css"

export const TourPage: FC = () => {
    return (
        <div className={style.tour}>
            <TourHeader tour={TourObject}/>
            <TourCarousel images={TourObject.images} map={TourObject.map} />
            <div className={style.tourContent}>
                <TourDescription tour={TourObject}/>
                <TourSidebar tour={TourObject}/>
            </div>
        </div>
    );
};
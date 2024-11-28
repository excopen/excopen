import {FC} from "react";
import {useOrientation} from "@/shared/hooks";
import {Orientation} from "@/shared/types";
import {SearchTourBar, TourList} from "@/widgets";
import container from "@/app/styles/containers.module.css"
import pages from "@/app/styles/pages.module.css"
import {ToFavButton} from "@/shared/ui";

export const ToursPage: FC = () => {

    const orientation = useOrientation(Orientation.VERTICAL)

    return (
        <div className={pages.tours}>
            <div className={container.sidebar}>
                <SearchTourBar orientation={orientation}/>
                <ToFavButton/>
            </div>
            <TourList/>
        </div>
    );
};
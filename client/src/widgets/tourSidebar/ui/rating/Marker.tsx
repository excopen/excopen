import {FC} from "react";
import {cn} from "@/app/lib/utils.ts";
import marker from "@/widgets/tourSidebar/ui/rating/marker.module.css"

type MarkerProps = {
    value: string
}

export const Marker: FC<MarkerProps> = ({value}) => {
    return (
        <div className={cn(
            marker.layout,
            marker.bg,
            marker.sizes,
            marker.text
        )}>
            {value}
        </div>
    );
};
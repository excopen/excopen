import {FC} from "react";
import {Slider} from "@/shared/ui";
import {useSlider} from "@/shared/hooks";
import {createTourStore} from "@/features/createTour/store";
import {formatRouteLength} from "@/shared/utills";

export const RouteLength: FC = () => {

    const {state, update} = useSlider(createTourStore, "routeLength")

    return (
        <div className={"flex flex-col gap-2 py-2"}>
            <div className={"flex flex-row gap-1 text-sm text-grayscale-500"}>
                <span>Длина маршрута</span>
                <span className={"font-medium"}>{formatRouteLength(state)}</span>
            </div>
            <Slider
                value={[state]}
                onValueChange={update}
                defaultValue={[1]}
                max={100}
                step={1}
            />
        </div>
    );
};
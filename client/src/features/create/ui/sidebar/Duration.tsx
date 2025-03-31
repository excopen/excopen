import {FC} from "react";
import {Slider} from "@/shared/ui";
import {useSlider} from "@/shared/hooks";
import {createTourStore} from "@/features/createTour/store";
import {formatHours} from "@/shared/utills";

export const Duration: FC = () => {

    const {state, update} = useSlider(createTourStore, "duration")

    return (
        <div className={"flex flex-col gap-2 py-2"}>
            <div className={"flex flex-row gap-1 text-sm text-grayscale-500"}>
                <span>Длительность</span>
                <span className={"font-medium"}>{formatHours(state)}</span>
            </div>
            <Slider
                value={[state]}
                onValueChange={update}
                defaultValue={[1]}
                max={24}
                step={0.5}
            />
        </div>
    );
};
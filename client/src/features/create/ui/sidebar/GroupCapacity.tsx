import {FC} from "react";
import {Slider} from "@/shared/ui";
import {useSlider} from "@/shared/hooks";
import {createTourStore} from "@/features/createTour/store";
import {formatPeople} from "@/shared/utills";

export const GroupCapacity: FC = () => {

    const {state, update} = useSlider(createTourStore, "groupCapacity")

    return (
        <div className={"flex flex-col gap-2 py-2"}>
            <div className={"flex flex-row gap-1 text-sm text-grayscale-500"}>
                <span>Размер группы</span>
                <span className={"font-medium"}>{formatPeople(state)}</span>
            </div>
            <Slider
                value={[state]}
                onValueChange={update}
                defaultValue={[1]}
                max={52}
                step={1}
            />
        </div>
    );
};
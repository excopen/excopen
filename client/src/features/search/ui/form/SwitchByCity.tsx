import {FC} from "react";
import {Orientation} from "@/shared/types";
import {Switch} from "@/shared/ui";
import {useSwitchState} from "@/features/search/hooks";
import {observer} from "mobx-react-lite";

type SwitchProps = {
    orientation: Orientation
}

export const Switch: FC<SwitchProps> = observer(({orientation}) => {

    const {state, update} = useSwitchState()

    return (
        <div
            className={
            orientation === Orientation.HORIZONTAL ?
                "flex max-wide:py-2 wide:justify-end" :
                "w-full flex items-start px-4"
        }
        >
            <div className={"flex flex-row gap-2 text-grayscale-600"}>
                <Switch
                    defaultValueBol={state}
                    onChangeValue={update}
                />
                <span>
                    Поиск в городе
                </span>
            </div>
        </div>
    );
})
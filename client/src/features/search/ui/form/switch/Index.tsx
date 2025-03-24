import {FC} from "react";
import {Orientation} from "@/shared/types";
import {Switch} from "@/shared/ui";
import style from "./style.module.css"
import {useSwitchState} from "@/features/search/hooks";
import {observer} from "mobx-react-lite";

type SwitchProps = {
    orientation: Orientation
}

export const Index: FC<SwitchProps> = observer(({orientation}) => {

    const {state, update} = useSwitchState()

    return (
        <div className={orientation === Orientation.HORIZONTAL ? style.horMode : style.verMode}>
            <div className={style.switch}>
                <Switch defaultValueBol={state} onChangeValue={update}/>
                <span>Поиск в городе</span>
            </div>
        </div>
    );
})
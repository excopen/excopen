import {FC, ReactNode} from "react";
import {cn} from "@/app/lib/utils.ts";
import {Orientation} from "@/shared/types";
import style from "./style.module.css"

type ContainerProps = {
    children: ReactNode
    orientation: Orientation
}

export const Container: FC<ContainerProps> = ({children, orientation}) => {
    return (
        <div
            role={"form"}
            className={cn(
                style.container,
                orientation === Orientation.HORIZONTAL ? style.containerHorMode : style.containerVerMode
            )}
        >
            {children}
        </div>
    );
};
import {FC, ReactNode} from "react";
import {Orientation} from "@/shared/types";

type SubContainerTopProps = {
    children: ReactNode
    orientation: Orientation
}

export const SubContainerTop: FC<SubContainerTopProps> = ({children, orientation}) => {
    return (
        <div className={
            "flex " +
            (
                orientation === Orientation.HORIZONTAL
                    ?
                    "flex-row justify-between gap-4"
                    :
                    "flex-col items-center gap-4"
            )
        }>
            {children}
        </div>
    );
};
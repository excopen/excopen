import {FC, ReactNode} from "react";
import {Orientation} from "@/shared/types";

type SubContainerBottom = {
    children: ReactNode
    orientation: Orientation
}

export const SubContainerBottom: FC<SubContainerBottom> = ({children, orientation}) => {
    return (
        <div className={
            orientation === Orientation.HORIZONTAL
                ?
                "flex justify-end"
                :
                "w-full flex items-start px-4"
        }>
            {children}
        </div>
    );
};
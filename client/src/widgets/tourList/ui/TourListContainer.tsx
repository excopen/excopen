import {FC, ReactNode} from "react";

type TourListContainerProps = {
    children: ReactNode
}

export const TourListContainer: FC<TourListContainerProps> = ({children}) => {
    return (
        <div className={"w-full flex flex-col gap-8"}>
            {children}
        </div>
    );
};
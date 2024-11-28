import {FC, ReactNode} from "react";

type TourPageMainProps = {
    children: ReactNode
}

export const TourPageMain: FC<TourPageMainProps> = ({children}) => {
    return (
        <div className={"flex flex-col md:flex-row"}>
            {children}
        </div>
    );
};
import {FC, ReactNode} from "react";

type TourPageContainerProps = {
    children: ReactNode
}

export const TourPageContainer: FC<TourPageContainerProps> = ({children}) => {
    return (
        <div className={"flex flex-col justify-between py-12"}>
            {children}
        </div>
    );
};
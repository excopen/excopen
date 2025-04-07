import {FC, ReactNode} from "react";
import {cn} from "@/app/lib/utils.ts";

type PriceContainerProps = {
    children: ReactNode
}

export const PriceContainer: FC<PriceContainerProps> = ({children}) => {
    return (
        <div className={cn("flex flex-row-reverse max-md:justify-end md:flex-col max-md:gap-2 md:items-end")}>
            {children}
        </div>
    );
};
import {FC, ReactNode} from "react";
import style from "./subContainer.module.css"
import {cn} from "@/app/lib/utils.ts";

type SubContainerProps = {
    children: ReactNode
}

export const SubContainer: FC<SubContainerProps> = ({children}) => {
    return (
        <div className={cn(style.layout, style.text)}>
            {children}
        </div>
    );
};
import {FC, ReactNode} from "react";
import content from "@/widgets/locationCard/ui/containers/content.module.css"
import {cn} from "@/app/lib/utils.ts";

type ContentProps = {
    children: ReactNode
}

export const Content: FC<ContentProps> = ({children}) => {
    return (
        <div className={cn(content.layout, content.text)}>
            {children}
        </div>
    );
};
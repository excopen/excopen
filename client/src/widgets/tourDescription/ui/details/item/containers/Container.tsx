import {FC, ReactNode} from "react";
import container from "@/widgets/tourDescription/ui/details/item/containers/container.module.css"
import {cn} from "@/app/lib/utils.ts";

type ContainerProps = {
    children: ReactNode
}

export const Container: FC<ContainerProps> = ({children}) => {
    return (
        <div className={cn(
            container.layout,
            container.bg,
            container.sizes,
            container.paddings
        )}>
            {children}
        </div>
    );
};
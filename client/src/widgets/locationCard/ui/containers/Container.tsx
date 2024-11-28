import {FC, ReactNode} from "react";
import container from "@/widgets/locationCard/ui/containers/container.module.css"
import {cn} from "@/app/lib/utils.ts";

type ContainerProps = {
    children: ReactNode
    image: string
}

export const Container: FC<ContainerProps> = ({children, image}) => {
    return (
        <div
            className={cn(
                container.paddings,
                container.layout,
                container.sizes,
                container.content,
                container.transitions, "group"
            )}
            style={{ backgroundImage: `url(${image})` }}
        >
            {children}
        </div>
    );
};
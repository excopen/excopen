import {FC} from "react";
import style from "@/widgets/tourDescription/ui/details/item/components/image.module.css"
import {cn} from "@/app/lib/utils.ts";

type ImageProps = {
    image: string
}

export const Image: FC<ImageProps> = ({image}) => {
    return (
        <div className={cn(
            style.layout,
            style.bg,
            style.sizes
        )}>
            <img
                width={20}
                height={20}
                alt={"users"}
                src={image}
            />
        </div>
    );
};
import {FC} from "react";
import gradient from "@/widgets/locationCard/ui/components/gradient.module.css"
import {cn} from "@/app/lib/utils.ts";

export const Gradient: FC = () => {
    return (
        <div className={cn(gradient.bg, gradient.transition)} />
    );
};
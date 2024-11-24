import * as React from "react";
import {cn} from "@/app/lib/utils.ts";

const CardTitle = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("font-semibold leading-none tracking-tight", className)}
        {...props}
    />
))

CardTitle.displayName = "CardTitle"

export {CardTitle}
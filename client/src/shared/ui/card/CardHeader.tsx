import * as React from "react";
import {cn} from "@/app/lib/utils.ts";

const CardHeader = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex flex-col space-y-1.5 p-6", className)}
        {...props}
    />
))

CardHeader.displayName = "CardHeader"

export {CardHeader}
import * as React from "react";
import {cn} from "@/app/lib/utils.ts";

const CardDescription = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("text-sm text-muted-foreground", className)}
        {...props}
    />
))

CardDescription.displayName = "CardDescription"

export {CardDescription}
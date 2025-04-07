import * as React from "react";
import {cn} from "@/app/lib/utils.ts";

export const CardMap = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({...props }, ref) => (
    <div ref={ref} className={cn("w-full h-full lg:w-[180px] wide:w-[260px] rounded-2xl overflow-hidden")} {...props} />
))

CardMap.displayName = "CardMap"
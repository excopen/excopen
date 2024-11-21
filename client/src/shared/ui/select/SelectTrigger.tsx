import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import {cn} from "@/app/lib/utils.ts";

const SelectTrigger = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>((
    {
        className,
        children,
        ...props
    },
    ref
) => (
    <SelectPrimitive.Trigger
        ref={ref}
        className={cn(
            "flex items-center justify-between whitespace-nowrap h-14 w-72 bg-grayscale-200 rounded-xl px-6 py-4 text-base " +
            "text-grayscale-600 " +
            "data-[state=open]:bg-grayscale-0 data-[state=open]:border data-[state=open]:border-grayscale-600 transition-colors ",
            className
        )}
        {...props}
    >
        {children}
    </SelectPrimitive.Trigger>
))

SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

export {SelectTrigger}
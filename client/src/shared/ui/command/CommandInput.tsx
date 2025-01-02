import * as React from "react";
import { Command as CommandPrimitive } from "cmdk";
import { cn } from "@/app/lib/utils.ts";
import { ComponentPropsWithoutRef, ElementRef } from "react";
import {SearchIcon, X} from "lucide-react";

export const CommandInput = React.forwardRef<
    ElementRef<typeof CommandPrimitive.Input>,
    ComponentPropsWithoutRef<typeof CommandPrimitive.Input> & {
    label: string;
    field: {
        isOpen: boolean;
        isTouched: boolean;
        isCorrectedField: boolean;
    },
    onClear: () => void
}
>(
    (
        {
            className,
            label,
            field,
            onClear,
            value,
            ...props
        },
        ref
    ) => {

        const isValidField = (field.isTouched && !value) || !field.isCorrectedField

        const containerStyles: string = "relative flex flex-col w-72";
        const wrapperStyles: string = "flex items-center";

        const iconSearchStyles: string = "absolute left-4 text-grayscale-500 h-5 w-5 text-gray-500";

        const iconXStyles: string = "absolute right-4 text-grayscale-500 h-5 w-5 text-gray-500 cursor-pointer";

        const inputStyles = [
            "h-14 w-full bg-grayscale-200 rounded-xl px-6 pt-2 text-base flex items-center",
            "placeholder-transparent transition duration-300",
            "focus:bg-white focus:outline-none",
            "pr-8 peer pl-12",
            field.isOpen ? "focus:ring-1 focus:ring-black" : "ring-transparent",
            isValidField ? "ring-1 ring-secondary-red focus:ring-secondary-red bg-red-100" : "",
        ].join(" ");

        const labelStyles = [
            "absolute left-12 text-base text-grayscale-400 transition-all duration-300",
            value || field.isOpen ? "top-1 text-sm text-black" : "top-4 text-base text-grayscale-400",
        ].join(" ");

        return (
            <div className={containerStyles}>
                <div className={wrapperStyles}>
                    <SearchIcon className={iconSearchStyles} />
                    <CommandPrimitive.Input
                        ref={ref}
                        className={cn(inputStyles, className)}
                        value={value}
                        placeholder=" "
                        {...props}
                    />
                    {value && <X onClick={onClear} className={iconXStyles} />}
                </div>
                <label className={labelStyles}>{label}</label>
            </div>
        );
    }
);

CommandInput.displayName = CommandPrimitive.Input.displayName;
import * as React from "react";
import { cn } from "@/app/lib/utils.ts";
import { useEffect, useState } from "react";
import { useDebounceValue } from "usehooks-ts";

type SearchByLocationInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    onChangeValue: (value: string) => void;
};


const SearchByLocationInput = React.forwardRef<
    HTMLInputElement,
    SearchByLocationInputProps
>(
    (
        {
            className,
            type = "text",
            onChangeValue,
            ...props
        },
        ref
    ) => {

        const [value, setValue] = useState<string>("")
        const clickHandler = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)
        const [debouncedValue] = useDebounceValue<string>(value, 500)

        useEffect(() => {
            if (onChangeValue) onChangeValue(debouncedValue);
        }, [debouncedValue, onChangeValue]);

        return (
            <input
                type={type}
                onChange={clickHandler}
                className={cn(
                    "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
SearchByLocationInput.displayName = "SearchByLocationInput";

export { SearchByLocationInput };
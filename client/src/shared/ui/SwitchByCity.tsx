import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"
import {cn} from "@/app/lib/utils.ts";
import {useEffect, useState} from "react";

type SwitchByCityProps = React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & {
    onChangeValue: (byCity: boolean) => void
}

const SwitchByCity = React.forwardRef<
    React.ElementRef<typeof SwitchPrimitives.Root>,
    SwitchByCityProps
>((
    {
      className,
      ...props
    },
    ref
) => {

    const [value, setValue] = useState<boolean>(false)

    useEffect(() => {
        props.onChangeValue(value)
    }, [value]);


    return (
        <SwitchPrimitives.Root
            className={cn(
                "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
                className
            )}
            checked={value}
            onCheckedChange={(checked) => setValue(checked)}
            {...props}
            ref={ref}
        >
            <SwitchPrimitives.Thumb
                className={cn(
                    "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
                )}
            />
        </SwitchPrimitives.Root>
    )
})

SwitchByCity.displayName = SwitchPrimitives.Root.displayName

export { SwitchByCity }

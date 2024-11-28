import * as React from "react";
import {cn} from "@/app/lib/utils.ts";
import {CardVariant} from "@/shared/ui/card/CardVariant.ts";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
    variant?: CardVariant
}

const Card = React.forwardRef<
    HTMLDivElement,
    CardProps
>(({ className, variant = CardVariant.SMALL, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            variant === CardVariant.LARGE
                ?
                "rounded-xl border bg-card text-card-foreground shadow m-1"
                :
                "rounded-xl border bg-card text-card-foreground shadow",
            className
        )}
        {...props}
    />
))

Card.displayName = "Card"

export {Card}
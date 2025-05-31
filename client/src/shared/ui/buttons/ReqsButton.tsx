import {FC} from "react";
import {Crown} from "lucide-react";
import {Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/shared/ui";
import {useTooltip} from "@/features";

export const ReqsButton: FC = () => {

    const {click, variant, isRefetching} = useTooltip()

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        disabled={isRefetching}
                        variant={variant}
                        size={"smIcon"}
                        className={"rounded-xl"}
                        onClick={click}
                    >
                        <Crown width={48} height={48} className={"text-grayscale-500"}/>
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    Показать только рекомендованные
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
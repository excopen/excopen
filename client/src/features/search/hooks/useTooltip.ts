import {useEffect, useState} from "react";
import {searchTourStore as store} from "@/features";
import {useTours} from "@/entities";

type VariantType = "outline" | "default"

type ResultType = {
    click: () => void
    variant: VariantType
    isRefetching: boolean
}

export const useTooltip = (): ResultType => {

    const {refetch, isRefetching} = useTours()

    const [isActive, setIsActive] = useState<boolean>(false)
    const [variant, setVariant] = useState<VariantType>("outline")

    useEffect(() => {
        if (store.searchParams.withReqs) {
            setIsActive(true)
            setVariant("default")
        }
    }, [])

    const click = async () => {
        if (!isActive) {

            store.searchParams.withReqs = false

            setVariant("default")
            setIsActive(true)

            await refetch()

        } else {

            store.searchParams.withReqs = true

            setVariant("outline")
            setIsActive(false)

            await refetch()

        }
    }

    return { click, variant, isRefetching }

}
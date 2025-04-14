import {useNavigate} from "react-router-dom";
import {useAuthContext, useOrder} from "@/features";
import {useTour} from "@/entities";
import {useEffect, useState} from "react";
import {ITour, RouteNames} from "@/shared/types";

type ReturnType = {
    tour: ITour
    capacity: number
    disabled: boolean
    click: () => void
    update: (value: number[]) => void
}

export const useBookingForm = (tourId: number): ReturnType => {

    const navigate = useNavigate()

    const {userId} = useAuthContext()
    const {data: tour} = useTour(tourId)
    const {mutate: booking} = useOrder()

    const [disabled, setDisabled] = useState<boolean>(true)
    const [capacity, setCapacity] = useState<number>(0)

    const update = (value: number[]) => setCapacity(value[0])

    useEffect(() => {
        if (capacity > 0) setDisabled(false)
        else setDisabled(true)
    }, [capacity])

    const click = () => {
        booking({
            id: Date.now(),
            tourId,
            userId,
            groupCapacity: capacity
        })
        navigate(`/${RouteNames.SUCCESS}`)
    }

    return {
        tour, capacity, disabled, click, update
    }

}
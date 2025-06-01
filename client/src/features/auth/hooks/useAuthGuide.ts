import {useCreateGuide} from "@/features";
import {useState} from "react";

type ResultType = {
    isPending: boolean
    isOpen: boolean
    setIsOpen: (value: boolean) => void
    isDisabled: boolean
    setIsCorrectedPhone: (value: boolean) => void
    setIsCorrectedInfo: (value: boolean) => void
    info: string
    setInfo: (value: string) => void
    setPhone: (value: string) => void
    load: () => void
}

export const useAuthGuide = (): ResultType => {

    const {mutate: createGuide, isPending} = useCreateGuide()

    const [isCorrectedPhone, setIsCorrectedPhone] = useState<boolean>(true)
    const [isCorrectedInfo, setIsCorrectedInfo] = useState<boolean>(true)
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const [info, setInfo] = useState<string>("Я гид, сильно увлеченный своим делом.")
    const [phone, setPhone] = useState<string>("")

    const load = () => createGuide({ phone, info}, {
        onSuccess: () => setIsOpen(false),
        onError: () => setIsOpen(false)
    })

    return {
        isOpen, info, isPending,
        isDisabled: isCorrectedPhone || isCorrectedInfo,
        setIsOpen, setIsCorrectedInfo, setIsCorrectedPhone, setInfo, setPhone, load
    }

}
import {useState} from "react";
import {useNavigate} from "react-router-dom";

import {RouteNames} from "@/shared/types";
import {useAuthContext} from "@/features";
import {useAddTags, useTags} from "@/entities";

type ReturnType = {
    tags: string[]
    selected: string[]
    disabled: boolean
    click: () => void
    add: (value: string) => void
    remove: (value: string) => void
}

export const useReqs = (): ReturnType => {

    const navigate = useNavigate()

    const {user}  = useAuthContext()
    const {data: tags} = useTags()
    const {mutate: addTags} = useAddTags()

    const [selected, setSelected] = useState<string[]>([])

    const add = (value: string) => {
        if (!selected.includes(value)) setSelected([...selected, value])
    }

    const remove = (value: string) => {
        setSelected(selected.filter(i => i !== value))
    }

    const click = () => {
        addTags({userId: user?.id as number, tags: selected})
        navigate(`/${RouteNames.MAIN}`)
    }

    return {
        disabled: selected.length === 0,
        selected,
        tags,
        add, remove, click
    }

}
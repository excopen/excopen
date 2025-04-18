import {useAuthContext, useUpdateMe} from "@/features";
import {useTags} from "@/entities";
import React, {useCallback, useState} from "react";
import {IMe, UserRole} from "@/shared/types";
import defaultAvatar from "@/shared/assets/icons/avatar.svg"

type Result = {
    isContributor: boolean
    user: IMe

    tags: string[]
    userTags: string[]

    updateName: (value: string) => void
    updateSurname: (value: string) => void
    updateInfo: (value: string) => void
    updateImage: (event: React.ChangeEvent<HTMLInputElement>) => void

    addTag: (value: string) => void
    removeTag: (value: string) => void

    load: () => void
}

export const useUserData = (): Result => {
    
    const {user} = useAuthContext()
    const {data: tags} = useTags()
    const {mutate: update} = useUpdateMe()

    const [updatedUser, setUpdatedUser] = useState<IMe>(user)
    
    const updateName = useCallback(
        (name: string) => setUpdatedUser({...updatedUser, name}),
        [updatedUser]
    )
    
    const updateSurname = useCallback(
        (surname: string) => setUpdatedUser({...updatedUser, surname}),
        [updatedUser]
    )
    
    const updateInfo = useCallback(
        (info: string) => setUpdatedUser({...updatedUser, info}), 
        [updatedUser]
    )
    
    const updateImage = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        setUpdatedUser({...updatedUser, avatar: file ? URL.createObjectURL(file) : defaultAvatar})
    }, [updatedUser])

    const addTag = useCallback((tag: string) => {
        const newTags = updatedUser.tags.includes(tag) ? updatedUser.tags : [...updatedUser.tags, tag]
        setUpdatedUser({...updatedUser, tags: newTags})
    }, [updatedUser])

    const removeTag = useCallback((tag: string) => {
        const newTags = updatedUser.tags.filter(i => i !== tag)
        setUpdatedUser({...updatedUser, tags: newTags})
    }, [updatedUser])

    const load = () => update(updatedUser)

    return {
        isContributor: updatedUser.role === UserRole.contributor,
        user: updatedUser,
        tags,
        userTags: updatedUser.tags,
        addTag, removeTag, updateName, updateSurname, updateInfo, updateImage, load
    }

}
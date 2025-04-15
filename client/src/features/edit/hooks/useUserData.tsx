import {useAuthContext} from "@/features";
import {useTags, useUpdateUser} from "@/entities";
import React, {useCallback, useState} from "react";
import defaultAvatar from "@/shared/assets/icons/avatar.svg";
import {IUser, RouteNames, UserRole} from "@/shared/types";
import {useNavigate} from "react-router-dom";

type Result = {
    isContributor: boolean
    name: string
    surname: string
    avatar: string
    description: string

    tags: string[]
    userTags: string[]

    updateName: (value: string) => void
    updateSurname: (value: string) => void
    updateAvatar: (value: string) => void
    updateDesc: (value: string) => void
    uploadImage: (event: React.ChangeEvent<HTMLInputElement>) => void

    addTag: (value: string) => void
    removeTag: (value: string) => void

    load: () => void
}

export const useUserData = (): Result => {

    const navigate = useNavigate()

    const {user} = useAuthContext()
    const {mutate: updateUser} = useUpdateUser()
    const {data: allTags} = useTags()

    const [name, setName] = useState<string>(user?.name as string)
    const [surname, setSurname] = useState<string>(user?.surname as string)
    const [description, setDescription] = useState<string>(user?.description || "")
    const [avatar, setAvatar] = useState<string>(user?.avatar || defaultAvatar)
    const [tags, setTags] = useState<string[]>(user?.tags || [])

    const updateData = () => {
        updateUser({...user as IUser, name, surname, avatar, description, tags})
        navigate(`/${RouteNames.EDIT_PROFILE}`)
    }

    const uploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) setAvatar(URL.createObjectURL(file))
    }

    const addTag = useCallback((tag: string) => {
        setTags(prev => (prev.includes(tag) ? prev : [...prev, tag]))
    }, [])

    const removeTag = useCallback((tag: string) => {
        setTags(prev => prev.filter(t => t !== tag))
    }, [])

    return {
        isContributor: user?.role === UserRole.contributor,
        name, surname, avatar, description,
        tags: allTags,
        userTags: user?.tags as string[],
        addTag,
        removeTag,
        updateName: setName,
        updateSurname: setSurname,
        updateAvatar: setAvatar,
        updateDesc: setDescription,
        uploadImage: uploadImage,
        load: updateData
    }

}
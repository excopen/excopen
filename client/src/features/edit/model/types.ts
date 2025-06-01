import {IMe} from "@/shared/types";
import React from "react";

export type EditContextType = {
    me: IMe
    setMe: (value: IMe) => void
    isGuide: boolean
    isDisabled: boolean
    isSuccessLoad: boolean
    isTagsLoading: boolean
    isPlaceholderTags: boolean
    isErrorTags: boolean
    tags: string[]
    myTags: string[]
    addTag: (value: string) => void
    removeTag: (value: string) => void
    setIsDisabled: (value: boolean) => void
    goBack: () => void
    load: () => void
    updateName: (value: string) => void
    updateSurname: (value: string) => void
    updateInfo: (value: string) => void
    updateImage: (event: React.ChangeEvent<HTMLInputElement>) => void
}
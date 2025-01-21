import {RangeType, SearchParamsType} from "@/shared/types";

export type SearchContextType = {

    searchParams: SearchParamsType

    setLocation: (location: string) => void
    setAccessibility: (accessibility: string) => void
    setByCity: (byCity: boolean) => void
    setDate: (date: RangeType) => void

    isSearch: boolean
    setIsSearch: (isSearch: boolean) => void

}
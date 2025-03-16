import {RangeType, SearchParamsType, SortValues} from "@/shared/types";

export type SearchContextType = {
    context: {
        searchParams: SearchParamsType
        sort: SortValues
        isSearch: boolean
    }
    updateSort: (sort: SortValues) => void
    setLocation: (location: string) => void
    setAccessibility: (accessibility: string) => void
    setByCity: (byCity: boolean) => void
    setDate: (date: RangeType) => void
    setIsSearch: (isSearch: boolean) => void
}
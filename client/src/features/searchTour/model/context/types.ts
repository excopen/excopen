import {SearchParamsType} from "@/shared/types";

export type SearchTourContextType = {
    searchParams: SearchParamsType
    setLocation: (location: string) => void
    setAccessibility: (type: string) => void
    setByCity: (byCity: boolean) => void
}
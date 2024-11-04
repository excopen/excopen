import {SearchParamsType} from "@/shared/types";

export type SearchTourContextType = {
    searchParams: SearchParamsType
    setSearchParams: (params: SearchParamsType) => void
}
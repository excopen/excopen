import {FC, ReactNode, useCallback, useEffect, useMemo, useState} from "react";
import {RangeType, SearchParamsType, SortValues} from "@/shared/types";
import {SearchContext} from "./context.ts";

export const Provider: FC<{children: ReactNode}> = ({children}) => {

    const [isSearch, setIsSearch] = useState<boolean>(false)

    const [searchParams, setSearchParams] = useState<SearchParamsType>({
        location: "",
        date: {
            from: undefined,
            to: undefined
        },
        accessibility: "",
        byCity: false
    })
    
    const [sort, setSort] = useState<SortValues>(SortValues.FOR_CHEAP)

    useEffect(() => {
        const saved = localStorage.getItem("searchParams")
        if (saved) setSearchParams(JSON.parse(saved))
    }, [])

    const updateParams = (params: Partial<SearchParamsType>) => {
        setSearchParams(prev => {
            const updated = {...prev, ...params}
            localStorage.setItem("searchParams", JSON.stringify(updated))
            return updated
        })
    }
    
    const updateSort = useCallback((sort: SortValues) => setSort(sort), [])
    const setLocation = useCallback((location: string) => updateParams({location}), [])
    const setAccessibility = useCallback((accessibility: string) => updateParams({accessibility}), [])
    const setByCity = useCallback((byCity: boolean) => updateParams({byCity}), [])
    const setDate = useCallback((date: RangeType) => updateParams({date}), [])

    const context = useMemo(() => ({
        searchParams, isSearch, sort
    }), [isSearch, searchParams, sort])
    
    return (
        <SearchContext.Provider value={{
            context,
            updateSort,
            setLocation,
            setAccessibility,
            setByCity,
            setDate,
            setIsSearch
        }}>
            {children}
        </SearchContext.Provider>
    )
}
import {FC, ReactNode, useEffect, useState} from "react";
import {RangeType, SearchParamsType} from "@/shared/types";
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

    useEffect(() => {
        const saved = localStorage.getItem("searchParams")
        if (saved) setSearchParams(JSON.parse(saved))
    }, []);

    const updateParams = (params: Partial<SearchParamsType>) => {
        setSearchParams(prev => {
            const updated = {...prev, ...params}
            localStorage.setItem("searchParams", JSON.stringify(updated))
            return updated
        })
    }

    const setLocation = (location: string) => updateParams({location})
    const setAccessibility = (accessibility: string) => updateParams({accessibility})
    const setByCity = (byCity: boolean) => updateParams({byCity})
    const setDate = (date: RangeType) => updateParams({date})

    return (
        <SearchContext.Provider value={{
            searchParams,
            setLocation,
            setAccessibility,
            setByCity,
            setDate,
            isSearch,
            setIsSearch
        }}>
            {children}
        </SearchContext.Provider>
    )

}
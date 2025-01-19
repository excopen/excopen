import {FC, ReactNode, useState} from "react";
import {RangeType} from "@/shared/types";
import {SearchContext} from "./context.ts";
import {SearchContextType} from "./types.ts";

export const Provider: FC<{children: ReactNode}> = ({children}) => {

    const [isSearch, setIsSearch] = useState<boolean>(false)

    const [searchParams, setSearchParams] = useState<SearchContextType>({
        location: "",
        date: {
            from: undefined,
            to: undefined
        },
        accessibility: "",
        byCity: false
    })

    const setLocation = (location: string) => {
        setSearchParams({
            ...searchParams,
            location
        })
    }

    const setAccessibility = (accessibility: string) => {
        setSearchParams({
            ...searchParams,
            accessibility
        })
    }

    const setByCity = (byCity: boolean) => {
        setSearchParams({
            ...searchParams,
            byCity
        })
    }

    const setDate = (date: RangeType) => {
        setSearchParams({
            ...searchParams,
            date
        })
    }

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
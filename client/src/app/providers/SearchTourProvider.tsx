import {FC, ReactNode, useState} from "react";
import {SearchParamsType, TourAccessibility} from "@/shared/types";
import {SearchTourContext} from "@/features";

export const SearchTourProvider: FC<{children: ReactNode}> = ({children}) => {

    const [searchParams, setSearchParams] = useState<SearchParamsType>({
        location: "",
        date: "",
        accessibility: TourAccessibility.WITHOUT_CHILDREN,
        byCity: false
    })

    const setLocation = (location: string) => {
        setSearchParams({
            ...searchParams,
            location
        })
    }

    const setAccessibility = (accessibility: TourAccessibility) => {
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

    return (
        <SearchTourContext.Provider value={{
            searchParams,
            setLocation,
            setAccessibility,
            setByCity
        }}>
            {children}
        </SearchTourContext.Provider>
    )

}
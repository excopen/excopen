import {createContext, FC, ReactNode, useState} from "react";
import {SearchTourContextType} from "@/features/searchTour/model/context/types.ts";
import {SearchParamsType, TourAccessibility} from "@/shared/types";

export const SearchTourContext = createContext<SearchTourContextType>(null!)

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

    return (
        <SearchTourContext.Provider value={{searchParams, setLocation, setAccessibility, setByCity}}>
    {children}
    </SearchTourContext.Provider>
)

}
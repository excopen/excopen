import {FC, ReactNode, useState} from "react";
import {SearchParamsType, TourAccessibility} from "@/shared/types";
import {
    SearchTourContext,
    setAccessibility,
    setByCity,
    setLocation
} from "@/features";

export const SearchTourProvider: FC<{children: ReactNode}> = ({children}) => {

    const [searchParams, setSearchParams] = useState<SearchParamsType>({
        location: "",
        date: "",
        accessibility: TourAccessibility.WITHOUT_CHILDREN,
        byCity: false
    })

    return (
        <SearchTourContext.Provider value={{
            searchParams,
            setLocation: (location) => setLocation(location, setSearchParams),
            setAccessibility: (accessibility) => setAccessibility(accessibility, setSearchParams),
            setByCity: (byCity) => setByCity(byCity, setSearchParams)
        }}>
            {children}
        </SearchTourContext.Provider>
    )

}
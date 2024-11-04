import {createContext, FC, ReactNode, useState} from "react";
import {SearchTourContextType} from "@/features/searchTour/types.ts";
import {SearchParamsType} from "@/shared/types";

export const SearchTourContext = createContext<SearchTourContextType | null>(null)

export const SearchTourProvider: FC<{children: ReactNode}> = ({children}) => {

    const [searchParams, setSearchParams] = useState<SearchParamsType>({
        location: "",
        date: "",
        type: "",
        byCity: false
    })

    return (
        <SearchTourContext.Provider value={{searchParams, setSearchParams}}>
            {children}
        </SearchTourContext.Provider>
    )

}
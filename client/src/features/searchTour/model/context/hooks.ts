import {SearchTourContext} from "@/features/searchTour/model/context/SearchTourContext.tsx";
import {useContext} from "react";
import {SearchTourContextType} from "@/features/searchTour/model/context/types.ts";

export const useSearchTourContext = (): SearchTourContextType => {
    const context = useContext(SearchTourContext)
    if (!context) throw new Error("Context error!")
    return context
}
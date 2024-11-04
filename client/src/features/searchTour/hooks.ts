import {SearchTourContext, SearchTourContextType} from "@/features/searchTour/searchTourContext.tsx";
import {useContext} from "react";

export const useSearchTourContext = (): SearchTourContextType => {
    const context = useContext(SearchTourContext)
    if (!context) throw new Error("Context error!")
    return context
}
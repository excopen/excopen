import {FC, ReactNode, useCallback, useEffect, useMemo, useState} from "react";
import {ITour} from "@/shared/types";
import {TourTrackingContext} from "@/features";

export const TourTrackingProvider: FC<{children: ReactNode}> = ({children}) => {

    const [viewed, setViewed] = useState<ITour[]>([])
    const [localFav, setLocalFav] = useState<ITour[]>([])

    useEffect(() => {
        setLocalFav(JSON.parse(localStorage.getItem('favourites') || "[]"))
        setViewed(JSON.parse(localStorage.getItem('viewed') || "[]"))
    }, []);

    const addToFav = useCallback((tour: ITour) => {
        setLocalFav(prev => {
            if (!prev.some(favTour => favTour.id === tour.id)) {
                const updated = [...prev, tour]
                localStorage.setItem('favourites', JSON.stringify(updated))
                return updated
            }
            return prev
        })
    }, [])

    const deleteFromFav = useCallback((tour: ITour) => {
        setLocalFav(prev => {
            const updated = prev.filter(favTour => favTour.id!== tour.id)
            localStorage.setItem('favourites', JSON.stringify(updated))
            return updated
        })
    }, [])

    const addToViewed = useCallback((tour: ITour) => {
        setViewed(prev => {
            if (!prev.some(viewed => viewed.id === tour.id)) {
                const updated = [...prev, tour]
                localStorage.setItem('viewed', JSON.stringify(updated))
                return updated
            }
            return prev
        })
    }, [])
    
    const context = useMemo(() => ({
        viewed, localFav
    }), [localFav, viewed])
    
    return (
        <TourTrackingContext.Provider value={{context, addToFav, deleteFromFav, addToViewed}}>
            {children}
        </TourTrackingContext.Provider>
    )
}
import {FC, ReactNode, useCallback, useEffect, useMemo, useState} from "react";
import {ITour} from "@/shared/types";
import {TourTrackingContext} from "@/features";
import {useAuthContext} from "@/app/context";
import {useAddToFav, useDeleteFromFav, useFav} from "@/entities";

export const TourTrackingProvider: FC<{children: ReactNode}> = ({children}) => {

    const {userId, isAuth} = useAuthContext()
    const {data: fav} = useFav(userId)

    const {mutate: addFav} = useAddToFav()
    const {mutate: deleteFav} = useDeleteFromFav()

    const [viewed, setViewed] = useState<ITour[]>([])
    const [localFav, setLocalFav] = useState<ITour[]>([])

    useEffect(() => {

        const savedFav = localStorage.getItem('favourites')
        if (savedFav) setLocalFav(JSON.parse(savedFav))

        if (!isAuth) {
            const savedViewed = localStorage.getItem('viewed')
            if (savedViewed) setViewed(JSON.parse(savedViewed))
        }

    }, [isAuth]);

    useEffect(() => {
        if (isAuth && fav) {
            setLocalFav(fav)
            localStorage.setItem("favourites", JSON.stringify(fav))
        }
    }, [isAuth, fav]);

    const addToFav = useCallback((tour: ITour) => {
        setLocalFav(prev => {
            if (!prev.some(favTour => favTour.id === tour.id)) {
                const updated = [...prev, tour]
                if (!isAuth) localStorage.setItem('favourites', JSON.stringify(updated))
                else addFav(tour.id)
                return updated
            }
            return prev
        })
    }, [addFav, isAuth])

    const deleteFromFav = useCallback((tour: ITour) => {
        setLocalFav(prev => {
            const updated = prev.filter(favTour => favTour.id!== tour.id)
            if (!isAuth) localStorage.setItem('favourites', JSON.stringify(updated))
            else deleteFav(tour.id)
            return updated
        })
    }, [deleteFav, isAuth])

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
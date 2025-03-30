import {FC, ReactNode, useCallback, useEffect, useMemo, useState} from "react";
import {WidgetContext} from "./context.ts"
import {searchTourStore, useLocations} from "@/entities";
import {searchByLocation} from "@/features";

export const Provider: FC<{children: ReactNode}> = ({children}) => {

    const {data: locations} = useLocations()

    const [city, setCity] = useState<string>("")
    const [isActive, setIsActive] = useState<boolean>(false)
    const [cities, setCities] = useState<string[]>([])

    useEffect(() => {
        setCity(city || "А")
        setCities(searchByLocation(city || "А", locations))
    }, [city, locations])

    const focus = useCallback(() => {
        setIsActive(true)
        setCities([])
    }, [])

    const blur = useCallback(() => {
        setIsActive(false)
        setCities(searchByLocation(city, locations))
    }, [city, locations])

    const selectCity = useCallback((city: string) => {
        window.scroll(0,0)
        searchTourStore.location = city
    }, [])
    
    const context = useMemo(() => ({
        city, isActive, cities
    }), [cities, city, isActive])

    return (
        <WidgetContext.Provider value={{ context, selectCity, update: setCity, blur, focus }}>
            {children}
        </WidgetContext.Provider>
    )
}
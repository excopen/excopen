import {FC, ReactNode, useState} from "react";
import {ToFavContext} from "@/features";

export const ToFavProvider: FC<{children: ReactNode}> = ({children}) => {

    const [favourites, setFavourites] = useState<number[]>([])

    const addToFavourite = (id: number) => {
        setFavourites(prevState => {
            if (!prevState.includes(id)) prevState.push(id)
            return prevState
        })
    }

    const removeFromFavourite = (id: number) => {
        setFavourites(prevState => prevState.filter(i => i !== id))
    }

    return (
        <ToFavContext.Provider value={{
            favourites,
            addToFavourite,
            removeFromFavourite
        }}>
            {children}
        </ToFavContext.Provider>
    )
}
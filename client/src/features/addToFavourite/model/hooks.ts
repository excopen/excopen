import {useContext} from "react";
import {ToFavContextType} from "./types.ts";
import {ToFavContext} from "./context.ts";

export const useToFavContext = (): ToFavContextType => {
    const context = useContext(ToFavContext)
    if (!context) throw new Error("Context error!")
    return context
}
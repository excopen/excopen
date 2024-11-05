import {useContext} from "react";
import {AuthContext} from "./AuthContext.tsx";
import {AuthContextType} from "./types.ts";

export const useAuthContext = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("Context error!");
    return context;
};
import {createContext, ReactNode} from "react";
import {AuthContextType} from "./types.ts";
import {UserRole} from "@/shared/types";

export const AuthContext = createContext<AuthContextType>(null!)

export const AuthProvider = ({ children }: { children: ReactNode }) => {

    return (
        <AuthContext.Provider value={{role: UserRole.client, isAuth: true}}>
            {children}
        </AuthContext.Provider>
    )

};
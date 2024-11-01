import {createContext, ReactNode} from "react";
import {UserType} from "./types.ts";
import {UserRole} from "@/shared/types";

export const UserContext = createContext<UserType | null>(null)

export const UserProvider = ({ children }: { children: ReactNode }) => {

    return (
        <UserContext.Provider value={{role: UserRole.client, isAuth: true}}>
            {children}
        </UserContext.Provider>
    )

};
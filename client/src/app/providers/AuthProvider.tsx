import {UserRole} from "@/shared/types";
import {ReactNode, useState} from "react";
import {AuthContext} from "@/features";

export const AuthProvider = ({ children }: { children: ReactNode }) => {

    // заглушка
    const [isAuth, setIsAuth] = useState<boolean>(false)

    return (
        <AuthContext.Provider value={{
            role: UserRole.contributor,
            userId: 1,
            isAuth,
            setIsAuth
        }}>
            {children}
        </AuthContext.Provider>
    )
}
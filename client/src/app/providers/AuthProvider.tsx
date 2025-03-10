import {UserRole} from "@/shared/types";
import {ReactNode} from "react";
import {AuthContext} from "@/app/context";

export const AuthProvider = ({ children }: { children: ReactNode }) => {

    // TODO подумать над регистрацией и как добавить id в контекст

    return (
        <AuthContext.Provider value={{
            role: UserRole.contributor,
            userId: 1,
            isAuth: true
        }}>
            {children}
        </AuthContext.Provider>
    )
};
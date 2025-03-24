import {UserRole} from "@/shared/types";
import {ReactNode} from "react";
import {AuthContext} from "@/features";

export const AuthProvider = ({ children }: { children: ReactNode }) => {

    // TODO подумать над регистрацией и как добавить id в контекст и доавить в избранное данные из local storage

    return (
        <AuthContext.Provider value={{
            role: UserRole.client,
            userId: 1,
            isAuth: true
        }}>
            {children}
        </AuthContext.Provider>
    )
};
import {ReactNode, useEffect, useState} from "react";
import {AuthContext, useGoogleSingIn, useGoogleSignOut, tourLocalHistoryStore as history} from "@/features";
import {IUser} from "@/shared/types";
import {useAddTags} from "@/entities";

export const AuthProvider = ({ children }: { children: ReactNode }) => {

    const [isAuth, setIsAuth] = useState<boolean>(true)
    const [user, setUser] = useState<IUser | null>(null)

    const {data, isSuccess, isError, login} = useGoogleSingIn()
    const {signOut} = useGoogleSignOut()
    const {mutate: addTags} = useAddTags()

    useEffect(() => {
        if (isSuccess && data) {
            setIsAuth(true)
            setUser(data)
            if (history.tagsCount !== 0) addTags({userId: data.id, tags: history.tags})
        }
        if (isError) console.error("Ошибка при авторизации")
    }, [data, isError, isSuccess]);

    const logout = () => {
        signOut()
        setIsAuth(false)
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{
            user,
            isAuth,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}
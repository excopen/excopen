import {ReactNode, useEffect, useState} from "react";
import {AuthContext, tourLocalHistoryStore as history, useLogout} from "@/features";
import {useAddTags} from "@/entities";
import {useMe} from "@/features/auth/model/useMe.ts";

export const AuthProvider = ({ children }: { children: ReactNode }) => {

    const [isAuth, setIsAuth] = useState<boolean>(true)

    const {user, isSuccess} = useMe()
    const {mutate: logoutFromGoogle} = useLogout()

    const {mutate: addTags} = useAddTags()

    useEffect(() => {
        if (isSuccess) {
            setIsAuth(true)
            if (history.tagsCount !== 0) addTags(history.tags)
        }
    }, [addTags, isSuccess]);

    const logout = () => {
        setIsAuth(false)
        logoutFromGoogle()
    }

    return (
        <AuthContext.Provider value={{user, isAuth, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
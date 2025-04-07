import {UserRole} from "@/shared/types";

export type AuthContextType = {
    isAuth: boolean
    setIsAuth: (isAuth: boolean) => void
    role: UserRole | null
    userId: number
}
import {IUser} from "@/shared/types";

export type AuthContextType = {
    isAuth: boolean
    user: IUser
    logout: () => void
}
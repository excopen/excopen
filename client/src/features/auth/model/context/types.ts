import {IUser} from "@/shared/types";
import {OverridableTokenClientConfig} from "@react-oauth/google";

export type AuthContextType = {
    isAuth: boolean
    user: IUser | null
    login: (token: OverridableTokenClientConfig) => void
    logout: () => void
}
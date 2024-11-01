import {UserRole} from "@/shared/types";

export type UserType = {
    isAuth: boolean
    role: UserRole | null
}
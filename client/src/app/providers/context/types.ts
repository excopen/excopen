import {UserRole} from "@/shared/types";

export interface IUserContext {
    role: UserRole
    isAuth?: boolean
}
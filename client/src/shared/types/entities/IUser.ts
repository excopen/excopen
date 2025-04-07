import {IOrder} from "@/shared/types/entities/IOrder.ts";
import {UserRole} from "@/shared/types";

export interface IUser {
    id: number
    role: UserRole
    avatar: string
    name: string
    surname: string
    email: string
    orders: IOrder[]
    description?: string
    accessToken?: string
}
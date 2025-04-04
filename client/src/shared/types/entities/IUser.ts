import {IOrder} from "@/shared/types/entities/IOrder.ts";
import {ITour, UserRole} from "@/shared/types";

export interface IUser {
    id: number
    role: UserRole
    avatar: File
    name: string
    surname: string
    email: string
    orders: IOrder[]
    visitedTours: ITour[]
    description?: string
}
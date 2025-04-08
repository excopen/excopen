import {IOrder} from "@/shared/types/entities/IOrder.ts";
import {IContacts, ITour, UserRole} from "@/shared/types";

export interface IUser {
    id: number
    role: UserRole
    avatar: string
    name: string
    surname: string
    email: string
    token: string
    orders: IOrder[]
    rating?: number
    ratingCount?: number
    contacts?: IContacts
    description?: string
    tours?: ITour[]
}
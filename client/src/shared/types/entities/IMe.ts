import {IOrder} from "@/shared/types/entities/IOrder.ts";
import {IContacts, ITour, UserRole} from "@/shared/types";

export interface IMe {
    id: number
    name: string
    surname: string
    email: string
    role: UserRole
    avatar: string
    tags: string[]
    orders: IOrder[]
    tours: ITour[]
    rating?: number
    ratingCount?: number
    contacts?: IContacts
    info?: string
}
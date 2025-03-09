import {IOrder} from "@/shared/types/entities/IOrder.ts";
import {ITour} from "@/shared/types";

export interface IUser {
    id: number
    name: string
    surname: string
    email: string
    orders: IOrder[]
    visitedTours: ITour[]
}
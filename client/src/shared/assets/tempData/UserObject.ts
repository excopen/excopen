import {IUser} from "@/shared/types/entities/IUser.ts";
import {OrderObject} from "@/shared/assets/tempData/OrderObject.ts";
import {ToursArray} from "@/shared/assets/tempData/ToursArray.ts";

export const UserObject: IUser = {
    id: 0,
    name: "Ivan",
    surname: "Ivanov",
    email: "ivanov@mail.ru",
    orders: [OrderObject, OrderObject],
    visitedTours: ToursArray
}
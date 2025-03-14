import {IUser} from "@/shared/types/entities/IUser.ts";
import {OrderObject} from "@/shared/assets/tempData/OrderObject.ts";
import {ToursArray} from "@/shared/assets/tempData/ToursArray.ts";
import avatar from "@/shared/assets/icons/contributor.svg"
import {UserRole} from "@/shared/types";

export const UserObject: IUser = {
    id: 0,
    role: UserRole.contributor,
    name: "Ирина Дмитриева",
    avatar: avatar,
    surname: "Ivanov",
    email: "ivanov@mail.ru",
    orders: [OrderObject, OrderObject],
    visitedTours: ToursArray,
    description: "Мы живем в Омске: любим этот город, " +
        "много знаем о нём и готовы поделиться с вами знаниями. " +
        "С удовольствием поможем убедиться в том, что здесь каждому найдётся " +
        "что посмотреть и куда сходить.",
}
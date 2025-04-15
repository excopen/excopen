import {IUser} from "@/shared/types/entities/IUser.ts";
import {OrderObject} from "@/shared/assets/tempData/OrderObject.ts";
import {ToursArray} from "@/shared/assets/tempData/ToursArray.ts";
import avatar from "@/shared/assets/icons/contributor.svg"
import {UserRole} from "@/shared/types";
import {ContactsObject} from "@/shared/assets/tempData/ContactsObject.ts";

export const UserObject: IUser = {
    id: 0,
    role: UserRole.contributor,
    name: "Ирина",
    avatar: avatar,
    surname: "дмитриева",
    email: "irina@mail.ru",
    orders: [OrderObject, OrderObject],
    tours: ToursArray,
    description: [
        "Мы живем в Омске: любим этот город,",
        "много знаем о нём и готовы поделиться с вами знаниями.",
        "С удовольствием поможем убедиться в том, что здесь каждому найдётся",
        "что посмотреть и куда сходить."
    ].join(" "),
    token: "",
    contacts: ContactsObject,
    rating: 4.5,
    ratingCount: 8,
    tags: [
        "культурные ценности",
        "достопримечательности",
        "природа и экология",
        "исторические места",
        "путешествия с детьми"
    ]
}
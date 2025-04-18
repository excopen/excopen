import {ToursArray} from "@/shared/assets/tempData/ToursArray.ts";
import avatar from "@/shared/assets/icons/contributor.svg"
import {IUser} from "@/shared/types";
import {ContactsObject} from "@/shared/assets/tempData/ContactsObject.ts";

export const UserObject: IUser = {
    id: 0,
    name: "Ирина",
    avatar: avatar,
    surname: "дмитриева",
    tours: ToursArray,
    info: [
        "Мы живем в Омске: любим этот город,",
        "много знаем о нём и готовы поделиться с вами знаниями.",
        "С удовольствием поможем убедиться в том, что здесь каждому найдётся",
        "что посмотреть и куда сходить."
    ].join(" "),
    contacts: ContactsObject,
    rating: 4.5,
    ratingCount: 8
}
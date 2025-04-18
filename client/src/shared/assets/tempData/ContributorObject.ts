import {IUser} from "@/shared/types/entities/IUser.ts";
import {TourObject} from "@/shared/assets/tempData/TourObject.ts";
import avatar from "@/shared/assets/icons/contributor.svg"
import {ContactsObject} from "@/shared/assets/tempData/ContactsObject.ts";

export const ContributorObject: IUser = {
    id: 1,
    name: "Ирина Дмитриева",
    avatar: avatar,
    description: "Мы живем в Омске: любим этот город, " +
        "много знаем о нём и готовы поделиться с вами знаниями. " +
        "С удовольствием поможем убедиться в том, что здесь каждому найдётся " +
        "что посмотреть и куда сходить.",
    rating: 8.8,
    ratingCount: 10,
    tours: [
        TourObject,
        TourObject,
        TourObject
    ],
    contacts: ContactsObject
}
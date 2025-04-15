import {IUser, TourAccessibility, TourFormat, TourFormatBehavior, UserRole} from "@/shared/types";
import avatar from "@/shared/assets/icons/contributor.svg";
import {OrderObject} from "@/shared/assets/tempData/OrderObject.ts";
import {ContactsObject} from "@/shared/assets/tempData/ContactsObject.ts";
import img1 from "@/shared/assets/tempData/assets/img1.png";
import img2 from "@/shared/assets/tempData/assets/img2.png";
import img3 from "@/shared/assets/tempData/assets/img3.png";
import img4 from "@/shared/assets/tempData/assets/img4.png";
import {DescriptionObject} from "@/shared/assets/tempData/DescriptionObject.ts";
import {LocationsArrayForFeature} from "@/shared/assets/tempData/LocationsArrayForFeature.ts";
import {ReviewsArray} from "@/shared/assets/tempData/ReviewsArray.ts";

export const usersArray: IUser[] = [
    {
        id: 0,
        role: UserRole.contributor,
        name: "Ирина Дмитриева",
        avatar: avatar,
        surname: "Ivanov",
        email: "ivanov@mail.ru",
        orders: [OrderObject, OrderObject],
        tours: [
            {
                time: "",
                byCity: false,
                coordinates: {
                    point: {
                        latitude: 55.0072,
                        longitude: 73.3242
                    },
                    zoom: 12
                },
                date: new Date("2025-04-04T10:00:00"),
                tags: [
                    "гастрономический туризм",
                    "активный отдых",
                    "морские путешествия",
                    "походы и кемпинг",
                ],
                contacts: ContactsObject,
                accessibility: TourAccessibility.WITHOUT_CHILDREN,
                priceForPerson: 4000,
                id: 0,
                title: "«Привокзалка»: место встречи изменить нельзя",
                images: [img1, img2, img3, img4],
                price: 12800,
                duration: 2,
                routeLength: 2,
                rating: 4.8,
                ratingCount: 10,
                format: TourFormat.GROUP,
                groupCapacity: 11,
                formatBehavior: TourFormatBehavior.WALK,
                description: DescriptionObject,
                contributorId: 1,
                location: LocationsArrayForFeature[0],
                reviews: ReviewsArray
            }
        ],
        description: "Мы живем в Омске: любим этот город, " +
            "много знаем о нём и готовы поделиться с вами знаниями. " +
            "С удовольствием поможем убедиться в том, что здесь каждому найдётся " +
            "что посмотреть и куда сходить.",
        tags: [],
        token: ""
    },
    {
        id: 1,
        role: UserRole.contributor,
        name: "Ирина Дмитриева",
        avatar: avatar,
        surname: "Ivanov",
        email: "ivanov@mail.ru",
        orders: [OrderObject, OrderObject],
        tours: [
            {
                time: "",
                byCity: false,
                coordinates: {
                    point: {
                        latitude: 55.0072,
                        longitude: 73.3242
                    },
                    zoom: 12
                },
                date: new Date("2025-04-04T10:00:00"),
                tags: [
                    "гастрономический туризм",
                    "активный отдых",
                    "морские путешествия",
                    "походы и кемпинг",
                ],
                contacts: ContactsObject,
                accessibility: TourAccessibility.WITHOUT_CHILDREN,
                priceForPerson: 4000,
                id: 0,
                title: "«Привокзалка»: место встречи изменить нельзя",
                images: [img1, img2, img3, img4],
                price: 12800,
                duration: 2,
                routeLength: 2,
                rating: 4.8,
                ratingCount: 10,
                format: TourFormat.GROUP,
                groupCapacity: 11,
                formatBehavior: TourFormatBehavior.WALK,
                description: DescriptionObject,
                contributorId: 1,
                location: LocationsArrayForFeature[0],
                reviews: ReviewsArray
            }
        ],
        description: "Мы живем в Омске: любим этот город, " +
            "много знаем о нём и готовы поделиться с вами знаниями. " +
            "С удовольствием поможем убедиться в том, что здесь каждому найдётся " +
            "что посмотреть и куда сходить.",
        tags: [],
        token: ""
    },
    {
        id: 2,
        role: UserRole.contributor,
        name: "Ирина Дмитриева",
        avatar: avatar,
        surname: "Ivanov",
        email: "ivanov@mail.ru",
        orders: [OrderObject, OrderObject],
        tours: [
            {
                time: "",
                byCity: false,
                coordinates: {
                    point: {
                        latitude: 55.0072,
                        longitude: 73.3242
                    },
                    zoom: 12
                },
                date: new Date("2025-04-04T10:00:00"),
                tags: [
                    "гастрономический туризм",
                    "активный отдых",
                    "морские путешествия",
                    "походы и кемпинг",
                ],
                contacts: ContactsObject,
                accessibility: TourAccessibility.WITHOUT_CHILDREN,
                priceForPerson: 4000,
                id: 0,
                title: "«Привокзалка»: место встречи изменить нельзя",
                images: [img1, img2, img3, img4],
                price: 12800,
                duration: 2,
                routeLength: 2,
                rating: 4.8,
                ratingCount: 10,
                format: TourFormat.GROUP,
                groupCapacity: 11,
                formatBehavior: TourFormatBehavior.WALK,
                description: DescriptionObject,
                contributorId: 1,
                location: LocationsArrayForFeature[0],
                reviews: ReviewsArray
            }
        ],
        description: "Мы живем в Омске: любим этот город, " +
            "много знаем о нём и готовы поделиться с вами знаниями. " +
            "С удовольствием поможем убедиться в том, что здесь каждому найдётся " +
            "что посмотреть и куда сходить.",
        tags: [],
        token: ""
    }
]
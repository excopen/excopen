import {IUser, TourAccessibility, TourFormat, TourFormatBehavior} from "@/shared/types";
import avatar from "@/shared/assets/icons/contributor.svg";
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
        name: "Ирина",
        avatar: avatar,
        surname: "Дмитриева",
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
        info: "Мы живем в Омске: любим этот город, много знаем о нём и готовы поделиться с вами знаниями.",
        rating: 0,
        ratingCount: 0,
        contacts: {
            vk: "@excopenVK",
            telegram: "@excopenTg",
            phone: "88005553535"
        }
    },
    {
        id: 1,
        name: "Алексей",
        avatar: avatar,
        surname: "Миронов",
        tours: [
            {
                time: "",
                byCity: true,
                coordinates: {
                    point: {
                        latitude: 59.9386,
                        longitude: 30.3141
                    },
                    zoom: 13
                },
                date: new Date("2025-06-15T14:30:00"),
                tags: [
                    "история",
                    "архитектура",
                    "пешеходная экскурсия"
                ],
                contacts: ContactsObject,
                accessibility: TourAccessibility.WITH_CHILDREN,
                priceForPerson: 2500,
                id: 1,
                title: "Секреты старого Петрограда",
                images: [img2, img3, img4],
                price: 7500,
                duration: 1,
                routeLength: 4,
                rating: 4.6,
                ratingCount: 8,
                format: TourFormat.GROUP,
                groupCapacity: 5,
                formatBehavior: TourFormatBehavior.WALK,
                description: DescriptionObject,
                contributorId: 2,
                location: LocationsArrayForFeature[1],
                reviews: ReviewsArray
            }
        ],
        info: "Экскурсовод с 7-летним стажем. Провожу атмосферные прогулки по Санкт-Петербургу.",
        rating: 4.9,
        ratingCount: 45,
        contacts: {
            vk: "@guideAlex",
            telegram: "@mironovSPB",
            phone: "+79211234567"
        }
    },
    {
        id: 2,
        name: "Светлана",
        avatar: avatar,
        surname: "Орлова",
        tours: [
            {
                time: "",
                byCity: false,
                coordinates: {
                    point: {
                        latitude: 43.1155,
                        longitude: 131.8855
                    },
                    zoom: 11
                },
                date: new Date("2025-07-20T09:00:00"),
                tags: [
                    "природа",
                    "экотуризм",
                    "походы и кемпинг",
                    "местные традиции"
                ],
                contacts: ContactsObject,
                accessibility: TourAccessibility.WITHOUT_CHILDREN,
                priceForPerson: 3000,
                id: 2,
                title: "Тайны Уссурийской тайги",
                images: [img1, img4],
                price: 9000,
                duration: 3,
                routeLength: 12,
                rating: 4.7,
                ratingCount: 16,
                format: TourFormat.GROUP,
                groupCapacity: 8,
                formatBehavior: TourFormatBehavior.BIKE,
                description: DescriptionObject,
                contributorId: 3,
                location: LocationsArrayForFeature[2],
                reviews: ReviewsArray
            }
        ],
        info: "Люблю дикие тропы и делюсь своей страстью к природе с гостями Приморского края.",
        rating: 4.8,
        ratingCount: 32,
        contacts: {
            vk: "@ecoSvetlana",
            telegram: "@taiga_tour",
            phone: "+74232001234"
        }
    }
]
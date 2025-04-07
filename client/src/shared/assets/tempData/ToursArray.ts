import {ITour, TourAccessibility, TourFormat, TourFormatBehavior} from "@/shared/types";
import {DescriptionObject} from "@/shared/assets/tempData/DescriptionObject.ts";
import {ReviewsArray} from "@/shared/assets/tempData/ReviewsArray.ts";
import {LocationsArrayForFeature} from "@/shared/assets/tempData/LocationsArrayForFeature.ts";
import {ContactsObject} from "@/shared/assets/tempData/ContactsObject.ts";
import img1 from "@/shared/assets/tempData/assets/img1.png";
import img2 from "@/shared/assets/tempData/assets/img2.png";
import img3 from "@/shared/assets/tempData/assets/img3.png";
import img4 from "@/shared/assets/tempData/assets/img4.png";
import {usersArray} from "@/shared/assets/tempData/UsersArray.ts";

const TourObject: ITour = {
    time: "14:00",
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
    images: [img1, img2, img3, img4, img1],
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
    registered: usersArray.slice(0,1),
    reviews: ReviewsArray
}

const TourObject2: ITour = {
    byCity: true,
    coordinates: {
        point: {
            latitude: 55.0072,
            longitude: 73.3242
        },
        zoom: 10
    },
    date: new Date("2025-04-04T10:00:00"),
    time: "12:30",
    tags: [
        "гастрономический туризм",
        "активный отдых",
        "морские путешествия",
        "походы и кемпинг",
    ],
    contacts: ContactsObject,
    accessibility: TourAccessibility.WITHOUT_CHILDREN,
    priceForPerson: 1000,
    id: 1,
    title: "«Привокзалка 2»: место встречи изменить нельзя",
    images: [img1, img2, img3, img4, img3],
    price: 1200,
    duration: 3,
    routeLength: 2,
    rating: 3.3,
    ratingCount: 10,
    format: TourFormat.INDIVIDUAL,
    groupCapacity: 13,
    formatBehavior: TourFormatBehavior.BUS,
    description: DescriptionObject,
    contributorId: 1,
    location: LocationsArrayForFeature[1],
    registered: usersArray,
    reviews: ReviewsArray
}

const TourObject3: ITour = {
    byCity: false,
    coordinates: {
        point: {
            latitude: 55.0072,
            longitude: 73.3242
        },
        zoom: 5
    },
    date: new Date("2025-04-04T10:00:00"),
    time: "16:06",
    tags: [
        "гастрономический туризм",
        "походы и кемпинг",
    ],
    contacts: ContactsObject,
    priceForPerson: 4000,
    id: 2,
    title: "«Привокзалка 3»: место встречи изменить нельзя",
    images: [img1, img2, img3, img4, img3],
    price: 17400,
    duration: 4,
    routeLength: 2,
    rating: 1.5,
    ratingCount: 10,
    format: TourFormat.GROUP,
    groupCapacity: 10,
    formatBehavior: TourFormatBehavior.BALLOON,
    description: DescriptionObject,
    contributorId: 1,
    location: LocationsArrayForFeature[2],
    reviews: ReviewsArray,
    registered: usersArray,
    accessibility: TourAccessibility.WITH_CHILDREN
}

const TourObject4: ITour = {
    byCity: false,
    coordinates: {
        point: {
            latitude: 55.0072,
            longitude: 73.3242
        },
        zoom: 20
    },
    date: new Date("2025-04-04T10:00:00"),
    time: "00:00",
    tags: [
        "активный отдых"
    ],
    contacts: ContactsObject,
    accessibility: TourAccessibility.WITH_CHILDREN,
    priceForPerson: 2000,
    id: 3,
    title: "«Опять Привокзалка»: место встречи изменить нельзя",
    images: [img1, img2, img3, img4, img3],
    price: 52000,
    duration: 1,
    routeLength: 2,
    rating: 4.1,
    ratingCount: 10,
    format: TourFormat.GROUP,
    groupCapacity: 10,
    formatBehavior: TourFormatBehavior.CAR,
    description: DescriptionObject,
    contributorId: 1,
    location: LocationsArrayForFeature[0],
    registered: usersArray,
    reviews: ReviewsArray
}

export const ToursArray: ITour[] = [
    TourObject,
    TourObject2,
    TourObject3,
    TourObject4,
]
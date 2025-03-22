import {ITour, TourAccessibility, TourFormat, TourFormatBehavior} from "@/shared/types";
import image from "./assets/img1.png";
import image2 from "./assets/img2.png";
import image3 from "./assets/img3.png";
import image4 from "./assets/img4.png";
import map from "./assets/map.png";
import {DescriptionObject} from "@/shared/assets/tempData/DescriptionObject.ts";
import {ReviewsArray} from "@/shared/assets/tempData/ReviewsArray.ts";
import {LocationsArrayForFeature} from "@/shared/assets/tempData/LocationsArrayForFeature.ts";
import {ContactsObject} from "@/shared/assets/tempData/ContactsObject.ts";

const TourObject: ITour = {
    contacts: ContactsObject,
    accessibility: TourAccessibility.WITHOUT_CHILDREN,
    priceForPerson: 4000,
    id: 0,
    title: "«Привокзалка»: место встречи изменить нельзя",
    shortDescription: "Изучить необычные достопримечательности микрорайона за ж/д вокзалом Омска!",
    images: [image, image2, image3, image4, image3],
    map: map,
    price: 12800,
    duration: 2,
    routeLength: 2,
    rating: 4.8,
    ratingCount: 10,
    format: TourFormat.GROUP,
    groupCapacity: 10,
    formatBehavior: TourFormatBehavior.WALK,
    description: DescriptionObject,
    contributorId: 1,
    location: LocationsArrayForFeature[0],
    reviews: ReviewsArray
}

const TourObject2: ITour = {
    contacts: ContactsObject,
    accessibility: TourAccessibility.WITHOUT_CHILDREN,
    priceForPerson: 1000,
    id: 1,
    title: "«Привокзалка 2»: место встречи изменить нельзя",
    shortDescription: "Изучить необычные достопримечательности микрорайона за ж/д вокзалом Омска!",
    images: [image, image2, image3, image4, image3],
    map: map,
    price: 1200,
    duration: 3,
    routeLength: 2,
    rating: 3.3,
    ratingCount: 10,
    format: TourFormat.INDIVIDUAL,
    groupCapacity: 10,
    formatBehavior: TourFormatBehavior.BUS,
    description: DescriptionObject,
    contributorId: 1,
    location: LocationsArrayForFeature[1],
    reviews: ReviewsArray
}

const TourObject3: ITour = {
    contacts: ContactsObject,
    priceForPerson: 4000,
    id: 2,
    title: "«Привокзалка 3»: место встречи изменить нельзя",
    shortDescription: "Изучить необычные достопримечательности микрорайона за ж/д вокзалом Омска!",
    images: [image, image2, image3, image4, image3],
    map: map,
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
    accessibility: TourAccessibility.WITH_CHILDREN
}

const TourObject4: ITour = {
    contacts: ContactsObject,
    accessibility: TourAccessibility.WITH_CHILDREN,
    priceForPerson: 2000,
    id: 3,
    title: "«Опять Привокзалка»: место встречи изменить нельзя",
    shortDescription: "Изучить необычные достопримечательности микрорайона за ж/д вокзалом Омска!",
    images: [image, image2, image3, image4, image3],
    map: map,
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
    reviews: ReviewsArray
}

export const ToursArray: ITour[] = [
    TourObject,
    TourObject2,
    TourObject3,
    TourObject4,
]
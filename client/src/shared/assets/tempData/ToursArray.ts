import {ITour} from "@/shared/types";
import image from "./assets/img1.png";
import image2 from "./assets/img2.png";
import image3 from "./assets/img3.png";
import image4 from "./assets/img4.png";
import map from "./assets/map.png";
import {DescriptionObject} from "@/shared/assets/tempData/DescriptionObject.ts";
import {ContributorObject} from "@/shared/assets/tempData/ContributorObject.ts";

const TourObject: ITour = {
    priceForPerson: 4000,
    id: 0,
    title: "«Привокзалка»: место встречи изменить нельзя",
    shortDescription: "Изучить необычные достопримечательности микрорайона за ж/д вокзалом Омска!",
    images: [image, image2, image3, image4, image3],
    map: map,
    price: 12800,
    duration: "2 часа",
    routeLength: 2,
    rating: "8,1",
    ratingCount: 10,
    format: "Групповой",
    groupCapacity: 10,
    formatBehavior: "Пешком",
    description: DescriptionObject,
    contributor: ContributorObject
}

const TourObject2: ITour = {
    priceForPerson: 1000,
    id: 1,
    title: "«Привокзалка 2»: место встречи изменить нельзя",
    shortDescription: "Изучить необычные достопримечательности микрорайона за ж/д вокзалом Омска!",
    images: [image, image2, image3, image4, image3],
    map: map,
    price: 12800,
    duration: "2 часа",
    routeLength: 2,
    rating: "8,1",
    ratingCount: 10,
    format: "Групповой",
    groupCapacity: 10,
    formatBehavior: "Пешком",
    description: DescriptionObject,
    contributor: ContributorObject
}

const TourObject3: ITour = {
    priceForPerson: 4000,
    id: 2,
    title: "«Привокзалка 3»: место встречи изменить нельзя",
    shortDescription: "Изучить необычные достопримечательности микрорайона за ж/д вокзалом Омска!",
    images: [image, image2, image3, image4, image3],
    map: map,
    price: 12800,
    duration: "2 часа",
    routeLength: 2,
    rating: "8,1",
    ratingCount: 10,
    format: "Групповой",
    groupCapacity: 10,
    formatBehavior: "Пешком",
    description: DescriptionObject,
    contributor: ContributorObject
}

const TourObject4: ITour = {
    priceForPerson: 2000,
    id: 3,
    title: "«Опять Привокзалка»: место встречи изменить нельзя",
    shortDescription: "Изучить необычные достопримечательности микрорайона за ж/д вокзалом Омска!",
    images: [image, image2, image3, image4, image3],
    map: map,
    price: 99999,
    duration: "2 часа",
    routeLength: 2,
    rating: "8,1",
    ratingCount: 10,
    format: "Групповой",
    groupCapacity: 10,
    formatBehavior: "Пешком",
    description: DescriptionObject,
    contributor: ContributorObject
}

export const ToursArray = [
    TourObject,
    TourObject2,
    TourObject3,
    TourObject4,
]
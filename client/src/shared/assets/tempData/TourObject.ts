import {ITour} from "@/shared/types";
import image from "./assets/img1.png";
import image2 from "./assets/img2.png";
import image3 from "./assets/img3.png";
import image4 from "./assets/img4.png";
import map from "./assets/map.png";
import {ContactsObject} from "@/shared/assets/tempData/ContactsObject.ts";
import {DescriptionObject} from "@/shared/assets/tempData/DescriptionObject.ts";
import {TourAccessibility, TourFormat, TourFormatBehavior} from "@/shared/types/utills";
import {LocationsArrayForFeature} from "@/shared/assets/tempData/LocationsArrayForFeature.ts";

export const TourObject: ITour = {
    id: 0,
    title: "«Привокзалка»: место встречи изменить нельзя",
    shortDescription: "Изучить необычные достопримечательности микрорайона за ж/д вокзалом Омска!",
    images: [image, image2, image3, image4, image3],
    map: map,
    price: 12800,
    priceForPerson: 4000,
    format: TourFormat.GROUP,
    formatBehavior: TourFormatBehavior.WALK,
    accessibility: TourAccessibility.WITH_CHILDREN,
    groupCapacity: 10,
    contributorId: 1,
    contacts: ContactsObject,
    duration: 2,
    routeLength: 2,
    rating: 5.0,
    ratingCount: 10,
    description: DescriptionObject,
    location: LocationsArrayForFeature[0],
    reviews: []
}
import {ITour, TourAccessibility, TourFormat, TourFormatBehavior} from "@/shared/types";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import {ContactsObject} from "@/shared/assets/tempData/ContactsObject.ts";
import {DescriptionObject} from "@/shared/assets/tempData/DescriptionObject.ts";
import {LocationsArrayForFeature} from "@/shared/assets/tempData/LocationsArrayForFeature.ts";

export const TourObject: ITour = {
    id: 0,
    title: "«Привокзалка»: место встречи изменить нельзя",
    images: [img1, img2, img3, img4],
    coordinates: {
        point: {
            latitude: 55.0072,
            longitude: 73.3242
        },
        zoom: 12
    },
    date: {
        from: new Date("2025-04-04T10:00:00"),
        to: new Date("2025-04-05T18:00:00")
    },
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
    reviews: [],
    byCity: true,
    tags: ["культурные ценности", "достопримечательности",],
}
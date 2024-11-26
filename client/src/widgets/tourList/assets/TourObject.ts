import {ITour} from "@/shared/types";
import image from "@/widgets/tourList/assets/img1.png";
import image2 from "@/widgets/tourList/assets/img2.png";
import image3 from "@/widgets/tourList/assets/img3.png";
import image4 from "@/widgets/tourList/assets/img4.png";
import map from "@/widgets/tourList/assets/map.png";
import {DescriptionObject} from "@/widgets/tourList/assets/DescriptionObject.ts";
import {ContributorObject} from "@/widgets/tourList/assets/ContributorObject.ts";
import {ContactsObject} from "@/widgets/tourList/assets/ContactsObject.tsx";

export const TourObject: ITour = {
    id: 0,
    title: "«Привокзалка»: место встречи изменить нельзя",
    shortDescription: "Изучить необычные достопримечательности микрорайона за ж/д вокзалом Омска!",
    images: [image, image2, image3, image4, image3],
    map: map,
    price: 12800,
    priceForPerson: 4000,
    format: "Групповой",
    formatBehavior: "Пешком",
    groupCapacity: 10,
    contributor: ContributorObject,
    contact: ContactsObject,
    duration: "2 часа",
    routeLength: 2,
    rating: "8,1",
    ratingCount: 10,
    description: DescriptionObject
}
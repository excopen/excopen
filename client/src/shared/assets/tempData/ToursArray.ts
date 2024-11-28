import {ITour} from "@/shared/types";
import image from "./assets/img1.png";
import image2 from "./assets/img2.png";
import image3 from "./assets/img3.png";
import image4 from "./assets/img4.png";

const TourObject: ITour = {
    id: 0,
    title: "«Привокзалка»: место встречи изменить нельзя",
    shortDescription: "Изучить необычные достопримечательности микрорайона за ж/д вокзалом Омска!",
    images: [image, image2, image3, image4, image3],
    price: 12800,
    duration: "2 часа",
    routeLength: 2,
    rating: "8,1",
    ratingCount: 10
}

export const ToursArray = [
    TourObject,
    TourObject,
    TourObject,
    TourObject,
    TourObject,
    TourObject,
    TourObject,
    TourObject,
    TourObject,
    TourObject
]
import {
    IAccessibility,
    IByCity, IContact,
    IDate, IDuration, IGroupCapacity,
    ILocationTour,
    IPrice,
    IRouteLength, ISubmitted,
    ITourFormat,
    ITourFormatBehavior
} from "@/shared/types";

export type TourStoreType =
    ILocationTour &
    IDate &
    IAccessibility &
    IByCity &
    ITourFormat &
    ITourFormatBehavior &
    IPrice &
    IContact &
    IDuration &
    IGroupCapacity &
    IRouteLength &
    ISubmitted
import {IDescription} from "@/shared/types/models/IDescription.ts";
import {ILocation} from "./ILocation.ts"
import {TourAccessibility} from "@/shared/types/constants/TourAccessibility.ts";

export interface ITour {
    id: number;
    title: string;
    description: IDescription;
    location: ILocation;
    price: number;
    duration: string;
    routeLength: number;
    minAge: number;
    maxCapacity: number; // ?
    rating: number;
    date: string // ?
    accessibility: TourAccessibility
    byCity: boolean
}
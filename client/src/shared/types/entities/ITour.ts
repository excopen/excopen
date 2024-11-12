import {IDescription} from "@/shared/types/entities/IDescription.ts";
import {ILocation} from "./ILocation.ts"
import {TourAccessibility} from "@/shared/types/entities/TourAccessibility.ts";

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
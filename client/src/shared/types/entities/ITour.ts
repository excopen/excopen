import {IDescription} from "@/shared/types/entities/IDescription.ts";
import {ILocation} from "./ILocation.ts"
import {TourAccessibility} from "@/shared/types/entities/TourAccessibility.ts";

export interface ITour {
    id: number;
    title: string;
    shortDescription: string
    images: string[] // массив избражений (тип временный)
    description?: IDescription;
    location?: ILocation;
    price: number;
    duration: string;
    routeLength: number;
    minAge?: number; // Зачем?
    maxCapacity?: number; // Зачем?
    rating: string;
    ratingCount: number
    date?: Date
    accessibility?: TourAccessibility
    byCity?: boolean
}
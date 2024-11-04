import {Description} from "@/shared/types/Description.ts";
import {Location} from "./Location.ts"

export interface Tour {
    id: number;
    title: string;
    description: Description;
    location: Location;
    price: number;
    duration: string;
    routeLength: number;
    minAge: number;
    maxCapacity: number;
    rating: number;
}
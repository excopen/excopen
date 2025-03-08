import {ITour} from "@/shared/types";
import {IContacts} from "@/shared/types/entities/IContacts.ts";

export interface IContributor {
    id: number
    name: string
    avatar: string
    description: string
    rating: number
    ratingCount: number
    tours?: ITour[]
    contacts: IContacts
}
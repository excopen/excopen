import {IContacts} from "@/shared/types/entities/IContacts.ts";
import {RouteNames} from "@/shared/types";

export const ContactsObject: IContacts = {
    id: 0,
    vk: `/${RouteNames.MAIN}`,
    telegram: `/${RouteNames.MAIN}`,
    link: `/${RouteNames.MAIN}`
}
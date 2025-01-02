import {locationsArray} from "@/widgets/form/utils/locationsArray.ts";

export const validateCity = (value: string): boolean => {
    return locationsArray.some(
        location => location.city.toLowerCase() === value.toLowerCase()
    )
}
import {ITour, SearchParamsType} from "@/shared/types";

export function filterTours(tours: ITour[], searchParams: Partial<SearchParamsType>) {
    return tours.filter(tour => {

        const matchesLocation = searchParams.location
            ? tour.location.city.toLowerCase().includes(searchParams.location.toLowerCase())
            : true
        const matchesDate = searchParams.date
            ? tour.date.toLowerCase().includes(searchParams.date.toLowerCase())
            : true
        const matchesAccessibility = searchParams.accessibility
            ? tour.accessibility === searchParams.accessibility
            : true;
        const matchesByCity = searchParams.byCity
            ? tour.byCity === searchParams.byCity
            : true

        return matchesLocation && matchesDate && matchesAccessibility && matchesByCity

    })
}
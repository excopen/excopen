import {useQuery} from "@tanstack/react-query";
import {ApiException} from "@/shared/lib";
import {
    ITour,
    TourAccessibility,
    TourFormat,
    TourFormatBehavior
} from "@/shared/types";
import {getTourById} from "@/entities/tour/api";
import bg from "@/shared/mocks/assets/cardBg.png";

export const useTour = (id: number) => {

    const fallback: ITour = {
        time: "",
        byCity: false,
        coordinates: {
            point: {
                latitude: 55.0072,
                longitude: 73.3242
            },
            zoom: 12
        },
        date: new Date("2025-04-04T10:00:00"),
        tags: [],
        contacts: {
            phone: ""
        },
        accessibility: TourAccessibility.WITHOUT_CHILDREN,
        priceForPerson: 0,
        id: 0,
        title: "",
        images: [],
        price: 0,
        duration: 0,
        routeLength: 0,
        rating: 0,
        ratingCount: 0,
        format: TourFormat.GROUP,
        groupCapacity: 0,
        formatBehavior: TourFormatBehavior.WALK,
        description: {
            info: "",
            whatToExpect: "",
            places: [],
            topics: [],
            orgDetails: "",
            meetingPlace: ""
        },
        contributorId: 1,
        location: {
            id: 0,
            country: "",
            city: "",
            region: "",
            tourCount: 0,
            image: bg,
        },
        registered: [],
        reviews: []
    }

    const query = useQuery<ITour, ApiException<ITour>>({
        queryKey: ["tour", id],
        queryFn: () => getTourById(id),
        staleTime: 60_000,
        enabled: !!id,
        initialData: fallback
    })

    return {
        ...query,
        isFallback: !query.data
    }

}
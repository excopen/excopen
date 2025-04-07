import {afterAll, beforeAll, describe, expect, it, vi} from "vitest";
import {setupServer} from "msw/node";
import {http, HttpResponse} from "msw";
import {getTours} from "@/entities/tour/api";
import {ITour, SearchParamsType, TourAccessibility} from "@/shared/types";
import {apiClient, ApiException} from "@/shared/lib";

describe("Get viewed", () => {

    const PATH: string = "https://excopent.ru/api/tours"

    const mockTours: ITour[] = [
        {
            id: 1,
            title: "Экскурсия по Москве",
            duration: "3 часа",
            price: 1500,
            groupCapacity: 10,
            shortDescription: "",
            images: [],
            contributorId: 0,
            priceForPerson: 0,
            routeLength: 0,
            rating: 0,
            ratingCount: 0,
            reviews: [],
            accessibility: TourAccessibility.WITH_CHILDREN
        },
        {
            id: 2,
            title: "Поездка в Петергоф",
            duration: "3 часа",
            price: 2000,
            groupCapacity: 15,
            shortDescription: "",
            images: [],
            contributorId: 0,
            priceForPerson: 0,
            routeLength: 0,
            rating: 0,
            ratingCount: 0,
            reviews: [],
            accessibility: TourAccessibility.WITH_CHILDREN
        },
    ];

    const server = setupServer(
        http.get(PATH, async ({ request }) => {

            const url = new URL(request.url)
            const location = url.searchParams.get("location")

            if (location === "Москва") {
                return HttpResponse.json(
                    mockTours.filter(t => t.accessibility === TourAccessibility.WITH_CHILDREN),
                    { status: 200 }
                )
            }
            return HttpResponse.json(mockTours, { status: 200 })

        })
    )

    beforeAll(() => {
        server.listen()
    })

    afterAll(() => {
        server.close()
    })

    it("Успешное получение всех туров", async () => {
        const tours = await getTours(null)
        expect(tours).toEqual(mockTours)
    })

    it("Получение туров с фильтрацией по локации", async () => {
        const searchParams: SearchParamsType = {
            location: "",
            date: {
                from: undefined,
                to: undefined
            },
            byCity: false,
            accessibility: TourAccessibility.WITH_CHILDREN
        }
        const filteredTours = await getTours(searchParams)
        expect(filteredTours).toEqual(
            mockTours.filter(t => t.accessibility === TourAccessibility.WITH_CHILDREN)
        )
    })

    it("Выбрасывает ApiException при ошибке сервера", async () => {
        server.use(
            http.get(PATH, async () => {
                return HttpResponse.json({ message: "Server error" }, { status: 500 })
            })
        )
        await expect(getTours(null)).rejects.toThrow(ApiException)
    })

    it("Выбрасывает ошибку сети, если сервер недоступен", async () => {
        vi.spyOn(apiClient, "get").mockRejectedValue(new Error("Network Error"))
        await expect(getTours(null)).rejects.toThrow("Network Error")
    })

})
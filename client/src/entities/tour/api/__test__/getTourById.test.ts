import { describe, it, expect, beforeAll, afterAll, vi } from "vitest";
import { setupServer } from "msw/node";
import { HttpResponse, http } from "msw";
import { apiClient, ApiException } from "@/shared/lib";
import {ContactsObject} from "@/shared/assets/tempData/ContactsObject.ts";
import {getTourById} from "@/entities/tour/api";
import {ITour} from "@/shared/types";

describe("Get tour by id", () => {

    const PATH = "https://excopent.ru/api/tours/tour"

    const mockTour: ITour = {
        ratingCount: 0,
        reviews: [],
        id: 0,
        title: "«Привокзалка»: место встречи изменить нельзя",
        shortDescription: "Изучить необычные достопримечательности микрорайона за ж/д вокзалом Омска!",
        images: [],
        map: "",
        price: 12800,
        priceForPerson: 4000,
        format: "Групповой",
        formatBehavior: "Пешком",
        groupCapacity: 10,
        contributorId: 1,
        contact: ContactsObject,
        duration: "2 часа",
        routeLength: 2,
        rating: 5.0
    }


    const server = setupServer(
        http.get(PATH, async ({ request }) => {

            const url = new URL(request.url)
            const id = url.searchParams.get("id")

            if (id === "1") return HttpResponse.json(mockTour, { status: 200 })
            return HttpResponse.json({ message: "Review not found" }, { status: 404 })

        })
    )

    beforeAll(() => {
        server.listen()
    })

    afterAll(() => {
        server.close()
    })

    it("Успешное получение экскурсии", async () => {
        const data = await getTourById(1)
        expect(data).toEqual(mockTour)
    })

    it("Возврат ошибки 404, если экскурсия не найден", async () => {
        await expect(getTourById(999)).rejects.toThrowError(ApiException)
    })

    it("Выбрасывает ApiException при ошибке сервера", async () => {
        server.use(
            http.get(PATH, async () => {
                return HttpResponse.json({ message: "Server error" }, { status: 500 })
            })
        )
        await expect(getTourById(1)).rejects.toThrow(ApiException)
    })

    it("Выбрасывает ошибку сети, если сервер недоступен", async () => {
        vi.spyOn(apiClient, "get").mockRejectedValue(new Error("Network Error"))
        await expect(getTourById(1)).rejects.toThrow("Network Error")
    })

})
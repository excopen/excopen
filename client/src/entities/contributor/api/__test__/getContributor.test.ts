import { describe, it, expect, beforeAll, afterAll, vi } from "vitest";
import { setupServer } from "msw/node";
import { HttpResponse, http } from "msw";
import { apiClient, ApiException } from "@/shared/lib";
import {IContributor} from "@/shared/types";
import avator from "@/shared/assets/icons/contributor.svg";
import {TourObject} from "@/shared/assets/tempData/TourObject.ts";
import {ContactsObject} from "@/shared/assets/tempData/ContactsObject.ts";
import {getContributor} from "@/entities/contributor/api";

describe("Get contributorSidebar", () => {

    const PATH = "https://excopent.ru/api/contributor"

    const mockContributor: IContributor = {
        id: 1,
        name: "Ирина Д.",
        avatar: avator,
        description: "Мы живем в Омске: любим этот город, " +
            "много знаем о нём и готовы поделиться с вами знаниями. " +
            "С удовольствием поможем убедиться в том, что здесь каждому найдётся " +
            "что посмотреть и куда сходить.",
        rating: 8.8,
        ratingCount: 10,
        tours: [
            TourObject,
            TourObject,
            TourObject
        ],
        contacts: ContactsObject
    }

    const server = setupServer(
        http.get(PATH, async ({ request }) => {

            const url = new URL(request.url)
            const id = url.searchParams.get("id")

            if (id === "1") return HttpResponse.json(mockContributor, { status: 200 })
            return HttpResponse.json({ message: "Review not found" }, { status: 404 })

        })
    )

    beforeAll(() => {
        server.listen()
    })

    afterAll(() => {
        server.close()
    })

    it("Успешное получение контрибьютера", async () => {
        const data = await getContributor(1)
        expect(data).toEqual(mockContributor)
    })

    it("Возврат ошибки 404, если контрибьютер не найден", async () => {
        await expect(getContributor(999)).rejects.toThrowError(ApiException)
    })

    it("Выбрасывает ApiException при ошибке сервера", async () => {
        server.use(
            http.get(PATH, async () => {
                return HttpResponse.json({ message: "Server error" }, { status: 500 })
            })
        )
        await expect(getContributor(1)).rejects.toThrow(ApiException)
    })

    it("Выбрасывает ошибку сети, если сервер недоступен", async () => {
        vi.spyOn(apiClient, "get").mockRejectedValue(new Error("Network Error"))
        await expect(getContributor(1)).rejects.toThrow("Network Error")
    })

})
import { describe, it, expect, vi, beforeAll, afterAll } from "vitest";
import { setupServer } from "msw/node";
import { HttpResponse, http } from "msw";
import {IContributor} from "@/shared/types";
import { apiClient, ApiException } from "@/shared/lib";
import avator from "@/shared/assets/icons/contributor.svg";
import {TourObject} from "@/shared/assets/tempData/TourObject.ts";
import {ContactsObject} from "@/shared/assets/tempData/ContactsObject.ts";
import {updateContributor} from "@/entities/contributor/api";

describe("Update contributorSidebar", () => {

    const PATH: string = "https://excopent.ru/api/contributor"

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
        http.put(PATH, async ({ request }) => {

            const updatedContributor = await request.json() as IContributor

            if (updatedContributor.id === 1) return HttpResponse.json(updatedContributor, { status: 200 })
            return HttpResponse.json({ message: "Invalid tour id" }, { status: 400 })

        })
    )

    beforeAll(() => {
        server.listen()
    })

    afterAll(() => {
        server.close()
    })

    it("Успешное обновление контрибьютера", async () => {
        const updatedContributor = await updateContributor(mockContributor)
        expect(updatedContributor).toEqual(mockContributor)
    })

    it("Возврат ошибки, если контрибьютер с таким id не найден", async () => {
        const invalidContributor: IContributor = { ...mockContributor, id: 999 }
        await expect(updateContributor(invalidContributor)).rejects.toThrowError(ApiException)
    })

    it("Выбрасывает ошибку сервера (500)", async () => {
        server.use(
            http.put(PATH, async () => {
                return HttpResponse.json({ message: "Server error" }, { status: 500 })
            })
        )
        await expect(updateContributor(mockContributor)).rejects.toThrowError(ApiException)
    })

    it("Выбрасывает ошибку сети, если сервер недоступен", async () => {
        vi.spyOn(apiClient, "put").mockRejectedValue(new Error("Network Error"))
        await expect(updateContributor(mockContributor)).rejects.toThrowError("Network Error")
    })

})
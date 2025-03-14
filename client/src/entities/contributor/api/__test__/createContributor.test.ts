import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";
import { apiClient, ApiException } from "@/shared/lib";
import {IContributor} from "@/shared/types";
import {ContactsObject} from "@/shared/assets/tempData/ContactsObject.ts";
import {addContributor} from "@/entities/contributor/api";

describe("Add contributor sidebar", () => {

    const PATH: string = "https://excopent.ru/api/contributor"

    const mockContributor: IContributor = {
        id: 1,
        name: "Ирина Д.",
        avatar: "",
        description: "Мы живем в Омске: любим этот город, " +
            "много знаем о нём и готовы поделиться с вами знаниями. " +
            "С удовольствием поможем убедиться в том, что здесь каждому найдётся " +
            "что посмотреть и куда сходить.",
        rating: 8.8,
        ratingCount: 10,
        contacts: ContactsObject
    }

    const server = setupServer(
        http.post(PATH, async ({request}) => {

            const contributor = await request.json() as IContributor

            if (contributor.id === 1) {
                return HttpResponse.json({ message: "Contributor created successfully" }, { status: 201 })
            }
            return HttpResponse.json({ message: "Invalid data" }, { status: 400 })

        })
    )

    beforeEach(() => {
        server.listen()
    })

    afterEach(() => {
        server.resetHandlers()
        server.close()
    })

    it("Проверка о том, что контрибьютер добавлен", async () => {
        await expect(addContributor(mockContributor)).resolves.toBeUndefined()
    })

    it("Проверка того, что данные корректы", async () => {
        server.use(
            http.post(PATH, async () => {
                return HttpResponse.json({ message: "Invalid data" }, { status: 400 })
            })
        )
        await expect(addContributor({ ...mockContributor, id: 1})).rejects.toThrow(ApiException)
    })

    it("Выбрасывает ApiException при ошибке сервера", async () => {
        server.use(
            http.post(PATH, async () => {
                return HttpResponse.json({ message: "Server error" }, { status: 500 })
            })
        )
        await expect(addContributor(mockContributor)).rejects.toThrow(ApiException)
    })

    it("Выбрасывает ошибку сети, если сервер недоступен", async () => {
        vi.spyOn(apiClient, "post").mockRejectedValue(new Error("Network Error"))
        await expect(addContributor(mockContributor)).rejects.toThrow("Network Error")
    })

})
import { describe, it, expect } from "vitest";
import { searchByRegion } from "@/features";
import { ITour } from "@/shared/types";

describe("searchByRegion", () => {

    const mockTours: ITour[] = [
        {
            id: 1,
            title: "Экскурсия по Москве",
            shortDescription: "Посещение Красной площади",
            images: [],
            contributorId: 101,
            price: 1000,
            priceForPerson: 500,
            duration: "2 часа",
            routeLength: 5,
            rating: 4.5,
            ratingCount: 10,
            reviews: [],
            byCity: true,
            location: { id: 1, city: "Москва", country: "Россия", tourCount: 20, image: "moscow.jpg" }
        },
        {
            id: 2,
            title: "Прогулка по Санкт-Петербургу",
            shortDescription: "Эрмитаж и Петропавловская крепость",
            images: [],
            contributorId: 102,
            price: 1500,
            priceForPerson: 750,
            duration: "3 часа",
            routeLength: 8,
            rating: 4.7,
            ratingCount: 15,
            reviews: [],
            byCity: false,
            location: { id: 2, city: "Санкт-Петербург", country: "Россия", tourCount: 30, image: "spb.jpg" }
        },
        {
            id: 3,
            title: "Путешествие по Казани",
            shortDescription: "Казанский Кремль и мечеть Кул-Шариф",
            images: [],
            contributorId: 103,
            price: 2000,
            priceForPerson: 1000,
            duration: "4 часа",
            routeLength: 10,
            rating: 4.9,
            ratingCount: 20,
            reviews: [],
            byCity: true,
            location: { id: 3, city: "Казань", country: "Россия", tourCount: 15, image: "kazan.jpg" }
        },
        {
            id: 4,
            title: "Открывая Сочи",
            shortDescription: "Путешествие по Черноморскому побережью",
            images: [],
            contributorId: 104,
            price: 2500,
            priceForPerson: 1250,
            duration: "5 часов",
            routeLength: 12,
            rating: 5.0,
            ratingCount: 25,
            reviews: [],
            byCity: false,
            location: { id: 4, city: "Сочи", country: "Россия", tourCount: 10, image: "sochi.jpg" }
        }
    ];

    it("Должен возвращать только туры с byCity = true", () => {
        const result = searchByRegion(mockTours, true);
        expect(result).toHaveLength(2);
        expect(result.map(t => t.id)).toEqual([1, 3]);
    });

    it("Должен возвращать только туры с byCity = false", () => {
        const result = searchByRegion(mockTours, false);
        expect(result).toHaveLength(2);
        expect(result.map(t => t.id)).toEqual([2, 4]);
    });

    it("Должен возвращать пустой массив, если нет туров с указанным byCity", () => {
        const result = searchByRegion([], true);
        expect(result).toHaveLength(0);
    });

    it("Не должен ломаться, если у тура отсутствует поле byCity", () => {
        const toursWithMissingByCity: ITour[] = [
            { ...mockTours[0], byCity: undefined },
            { ...mockTours[1], byCity: false }
        ];
        const result = searchByRegion(toursWithMissingByCity, false);
        expect(result).toHaveLength(1);
        expect(result[0].id).toBe(2);
    });

});
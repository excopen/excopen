import { describe, it, expect } from "vitest";
import { searchByCity } from "@/features";
import { ITour } from "@/shared/types";

describe("Search by city", () => {

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
            location: { id: 4, city: "Сочи", country: "Россия", tourCount: 10, image: "sochi.jpg" }
        },
        {
            id: 5,
            title: "Москва для туристов",
            shortDescription: "Кремль, ВДНХ и смотровые площадки",
            images: [],
            contributorId: 105,
            price: 3000,
            priceForPerson: 1500,
            duration: "6 часов",
            routeLength: 15,
            rating: 4.3,
            ratingCount: 5,
            reviews: [],
            location: { id: 5, city: "Москва", country: "Россия", tourCount: 25, image: "moscow2.jpg" }
        }
    ];

    it("Должен возвращать туры по точному совпадению города", () => {
        const result = searchByCity(mockTours, "Москва");
        expect(result).toHaveLength(2);
        expect(result.map(t => t.id)).toEqual([1, 5]);
    });

    it("Поиск не должен зависеть от регистра", () => {
        const result = searchByCity(mockTours, "москва");
        expect(result).toHaveLength(2);
        expect(result.map(t => t.id)).toEqual([1, 5]);
    });

    it("Должен возвращать туры, если введена часть названия (начало слова)", () => {
        const result = searchByCity(mockTours, "Ка");
        expect(result).toHaveLength(1);
        expect(result[0].id).toBe(3);
    });

    it("не должен находить туры, если введенное название не совпадает", () => {
        const result = searchByCity(mockTours, "Владивосток");
        expect(result).toHaveLength(0);
    });

    it("Не должен ломаться, если в туре отсутствует `location`", () => {
        const toursWithMissingLocation: ITour[] = [
            { ...mockTours[0], location: undefined },
            { ...mockTours[1], location: { id: 2, city: "Санкт-Петербург", country: "Россия", tourCount: 30, image: "spb.jpg" } }
        ];
        const result = searchByCity(toursWithMissingLocation, "Санкт-Петербург");
        expect(result).toHaveLength(1);
        expect(result[0].id).toBe(2);
    });

    it("Не должен ломаться, если список туров пуст", () => {
        const result = searchByCity([], "Москва");
        expect(result).toHaveLength(0);
    });

});
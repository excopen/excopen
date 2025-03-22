import {IDescription} from "@/shared/types/entities/IDescription.ts";
import {ILocation} from "./ILocation.ts"
import {IContacts} from "@/shared/types/entities/IContacts.ts";
import {IReview} from "@/shared/types/entities/IReview.ts";
import {TourAccessibility, TourFormat, TourFormatBehavior} from "@/shared/types/utills";
import {YandexMapPoint} from "@/shared/types/lib";

export interface ITour {
    id: number

    // MAIN

    images: string[] // отдельная виджет нужен для отображения загруженных фото
    title: string
    shortDescription: string // это пойдет в саму карточку
    description?: IDescription

    // SiDEBAR

    // Локация
    map?: string // затычка, уберу когда api карт подключу
    coordinates?: YandexMapPoint // нужен отдельный виджет с картой
    location: ILocation // не учитывать, тут нужно обычное поле ввода
    routeLength: number // в км
    byCity?: boolean // опциональный выбор (switch)

    // Цена
    price: number
    priceForPerson: number
    groupCapacity: number // поле останется, даже если формат будет индивидуальный (лучше наверное так оставить чтобы дизайн не ломать)

    // Доступность
    formatBehavior: TourFormatBehavior // опциональный выбор
    format: TourFormat // опциональный выбор
    accessibility: TourAccessibility // опциональный выбор
    minAge?: number // Никак не используемое поле, мб убрать вообще

    // Контакты (номер телефона, вк, телега)
    contacts: IContacts

    // Дата и время
    date?: Date
    duration: number // в часах (было бы круто сделай ввиде полосы прокрутки от 0,5 до 24 часов)

    // Поля не для заполнения
    contributorId: number
    rating: number
    ratingCount: number
    reviews: IReview[]
}
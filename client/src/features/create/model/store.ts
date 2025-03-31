import {makeAutoObservable} from "mobx";
import {IContacts, RangeType} from "@/shared/types";
import {TourStoreType} from "./types.ts";

class CreateTourStore implements TourStoreType {

    private _isSubmitted: boolean = false

    private _location: string = ""
    private _date: RangeType = { from: undefined, to: undefined }
    private _duration: number = 0
    private _accessibility: string = ""
    private _byCity: boolean = false
    private _format: string = ""
    private _formatBehavior: string = ""
    private _price: number = 0
    private _priceForPerson: number = 0
    private _groupCapacity: number = 0
    private _routeLength: number = 0
    private _contacts: IContacts = {
        vk: "",
        telegram: "",
        phone: ""
    }

    get contacts(): IContacts {
        return this._contacts;
    }

    set contacts(value: IContacts) {
        this._contacts = value;
    }

    private updateContactParams(contacts: Partial<IContacts>) {
        this._contacts = { ...this._contacts, ...contacts }
    }

    get vk(): string {
        return this._contacts.vk || ""
    }

    set vk(vk: string) {
        this.updateContactParams({vk})
    }

    get telegram(): string {
        return this._contacts.telegram || ""
    }

    set telegram(telegram: string) {
        this.updateContactParams({telegram})
    }

    get phone(): string {
        return this._contacts.phone
    }

    set phone(phone: string) {
        this.updateContactParams({phone})
    }

    constructor() {
        makeAutoObservable(this)
    }

    get isSubmitted(): boolean {
        return this._isSubmitted;
    }

    set isSubmitted(value: boolean) {
        this._isSubmitted = value;
    }

    get location(): string {
        return this._location;
    }

    set location(value: string) {
        this._location = value;
    }

    get date(): RangeType {
        return this._date;
    }

    set date(value: RangeType) {
        this._date = value;
    }

    get accessibility(): string {
        return this._accessibility;
    }

    set accessibility(value: string) {
        this._accessibility = value;
    }

    get byCity(): boolean {
        return this._byCity;
    }

    set byCity(value: boolean) {
        this._byCity = value;
    }

    get format(): string {
        return this._format;
    }

    set format(value: string) {
        this._format = value;
    }

    get formatBehavior(): string {
        return this._formatBehavior;
    }

    set formatBehavior(value: string) {
        this._formatBehavior = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get priceForPerson(): number {
        return this._priceForPerson;
    }

    set priceForPerson(value: number) {
        this._priceForPerson = value;
    }

    get duration(): number {
        return this._duration;
    }

    set duration(value: number) {
        this._duration = value;
    }

    get groupCapacity(): number {
        return this._groupCapacity;
    }

    set groupCapacity(value: number) {
        this._groupCapacity = value;
    }

    get routeLength(): number {
        return this._routeLength;
    }

    set routeLength(value: number) {
        this._routeLength = value;
    }

}

export const createTourStore = new CreateTourStore()
import {makeAutoObservable} from "mobx";
import {IByCity, IIsDisabled, ILocation, ILocationTour, IRouteLength} from "@/shared/types";

export class LocationStore implements ILocationTour, IRouteLength, IByCity, IIsDisabled {

    private _location: ILocation = {
        id: 0,
        city: "",
        country: "",
        tourCount: 0,
        region: "",
        image: ""
    }
    private _routeLength: number = 0
    private _byCity: boolean = false

    constructor() {
        makeAutoObservable(this)
    }

    get isDisabled(): boolean {
        return this._location.city.trim().length > 0 && this._routeLength > 0
    }

    get location(): ILocation {
        return this._location;
    }

    set location(value: ILocation) {
        this._location = value;
    }

    get byCity(): boolean {
        return this._byCity;
    }

    set byCity(value: boolean) {
        this._byCity = value;
    }

    get routeLength(): number {
        return this._routeLength;
    }

    set routeLength(value: number) {
        this._routeLength = value;
    }

}
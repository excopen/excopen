import {ICoordinates, IIsDisabled, YandexMapCoordinates} from "@/shared/types";
import {makeObservable} from "mobx";

export class CoordinatesStore implements ICoordinates, IIsDisabled {

    private _coordinates: YandexMapCoordinates = {
        point: {
            latitude: 0,
            longitude: 0
        },
        zoom: 0.5
    }

    get isDisabled(): boolean {
        return this._coordinates.point.longitude > 0 && this._coordinates.point.latitude > 0
    }

    constructor() {
        makeObservable(this)
    }

    get coordinates(): YandexMapCoordinates {
        return this._coordinates;
    }

    set coordinates(value: YandexMapCoordinates) {
        this._coordinates = value;
    }

}
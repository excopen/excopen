import {IImages, IIsDisabled, ImagesType} from "@/shared/types";
import {makeAutoObservable} from "mobx";

export class ImagesStore implements IImages, IIsDisabled {

    private _images: ImagesType = Array(5).fill(null)

    constructor() {
        makeAutoObservable(this)
    }

    get isDisabled(): boolean {
        return (
            this._images.length > 0 &&
            this._images.every((img) => img !== null && img !== undefined)
        )
    }


    get images(): ImagesType {
        return this._images;
    }

    set images(value: ImagesType) {
        this._images = value;
    }

}
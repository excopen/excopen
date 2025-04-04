import {IDate, IDuration, IIsDisabled, RangeType} from "@/shared/types";
import {makeAutoObservable} from "mobx";

export class TimeStore implements IDate, IDuration, IIsDisabled {

    private _date: RangeType = { from: undefined, to: undefined }
    private _duration: number = 0

    constructor() {
        makeAutoObservable(this)
    }

    get isDisabled(): boolean {
        return (
            this._duration > 0 &&
            this._date.to !== undefined &&
            this._date.from !== undefined
        )
    }

    get date(): RangeType {
        return this._date;
    }

    set date(value: RangeType) {
        this._date = value;
    }

    get duration(): number {
        return this._duration;
    }

    set duration(value: number) {
        this._duration = value;
    }

}
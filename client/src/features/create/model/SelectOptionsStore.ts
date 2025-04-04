import {IAccessibility, IIsDisabled, ITourFormat, ITourFormatBehavior} from "@/shared/types";
import {makeAutoObservable} from "mobx";

export class SelectOptionsStore implements IAccessibility, ITourFormat, ITourFormatBehavior, IIsDisabled {

    private _accessibility: string = ""
    private _format: string = ""
    private _formatBehavior: string = ""

    constructor() {
        makeAutoObservable(this)
    }

    get isDisabled(): boolean {
        return !!(
            this._accessibility.trim() &&
            this._format.trim() &&
            this._formatBehavior.trim()
        )
    }

    get accessibility(): string {
        return this._accessibility;
    }

    set accessibility(value: string) {
        this._accessibility = value;
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

}
import {makeAutoObservable} from "mobx";
import {IContributorId, IGroupCapacity, IIsDisabled, ITitle} from "@/shared/types";

export class ParamsStore implements IContributorId, IGroupCapacity, ITitle, IIsDisabled {

    private _groupCapacity: number = 0
    private _title: string = ""
    private _contributorId: number = 0

    constructor() {
        makeAutoObservable(this)
    }

    get isDisabled(): boolean {
        return !!(this._title.trim() && this._groupCapacity > 0)
    }

    get contributorId(): number {
        return this._contributorId;
    }

    set contributorId(value: number) {
        this._contributorId = value;
    }

    get groupCapacity(): number {
        return this._groupCapacity;
    }

    set groupCapacity(value: number) {
        this._groupCapacity = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

}
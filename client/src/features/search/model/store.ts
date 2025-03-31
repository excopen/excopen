import {
    IAccessibility, IByCity,
    IDate,
    ILocationTour, ISort,
    ISubmitted,
    RangeType,
    SearchParamsType,
    SortValues
} from "@/shared/types";
import {makeAutoObservable} from "mobx";

class SearchTourStore implements ILocationTour, IDate, IAccessibility, IByCity, ISort, ISubmitted {

    private _isSubmitted: boolean = false
    private _sort: string = SortValues.FOR_CHEAP
    private _searchParams: SearchParamsType = {
        location: "",
        date: {
            from: undefined,
            to: undefined
        },
        accessibility: "",
        byCity: false
    }

    constructor() {
        makeAutoObservable(this)
        this.loadFromStorage()
    }

    private loadFromStorage() {
        const saved = localStorage.getItem("searchParams")
        if (saved) this._searchParams = JSON.parse(saved)
    }

    private saveToStorage() {
        localStorage.setItem("searchParams", JSON.stringify(this._searchParams))
    }

    private updateParams(params: Partial<SearchParamsType>) {
        this._searchParams = { ...this._searchParams, ...params }
        this.saveToStorage()
    }

    get searchParams(): SearchParamsType {
        return this._searchParams
    }

    get location(): string {
        return this._searchParams.location
    }

    get date(): RangeType {
        return this._searchParams.date
    }

    set date(value: RangeType) {
        this.updateParams({ date: value })
    }

    get accessibility(): string {
        return this._searchParams.accessibility
    }

    set accessibility(accessibility: string) {
        this.updateParams({ accessibility })
    }

    get byCity(): boolean {
        return this._searchParams.byCity
    }

    get isSubmitted(): boolean {
        return this._isSubmitted
    }

    set isSubmitted(value: boolean) {
        this._isSubmitted = value
        console.log(this._isSubmitted)
    }

    get isDisabled(): boolean {
        return !!this._searchParams.location
            && !!this._searchParams.date.from
            && !!this._searchParams.date.to
            && !!this._searchParams.accessibility
    }

    set location(location: string) {
        this.updateParams({ location })
    }

    set byCity(byCity: boolean) {
        this.updateParams({ byCity })
    }

    get sort(): string {
        return this._sort
    }

    set sort(sort: string) {
        this._sort = sort
    }

}

export const searchTourStore = new SearchTourStore()
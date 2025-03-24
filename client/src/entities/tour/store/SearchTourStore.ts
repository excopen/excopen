import {RangeType, SearchParamsType, SortValues} from "@/shared/types";
import {makeAutoObservable} from "mobx";

class SearchTourStore {

    private _isSearch: boolean = false
    private _sort: SortValues = SortValues.FOR_CHEAP
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

    get accessibility(): string {
        return this._searchParams.accessibility
    }

    get byCity(): boolean {
        return this._searchParams.byCity
    }

    get isSearch(): boolean {
        return this._isSearch
    }

    get sort(): SortValues {
        return this._sort
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

    set accessibility(accessibility: string) {
        this.updateParams({ accessibility })
    }

    set byCity(byCity: boolean) {
        this.updateParams({ byCity })
    }

    set date(date: RangeType) {
        this.updateParams({ date })
    }

    set isSearch(value: boolean) {
        this._isSearch = value
        console.log(this._isSearch)
    }

    set sort(sort: SortValues) {
        this._sort = sort
    }

}

export const searchTourStore = new SearchTourStore()
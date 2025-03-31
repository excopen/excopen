import {RangeType} from "@/shared/types";

export interface IDateState {
    get date(): RangeType
    set date(value: RangeType)
}
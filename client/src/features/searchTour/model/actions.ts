import React from "react";
import {SearchParamsType} from "@/shared/types";

export const setLocation = (
    location: string,
    setSearchParams: React.Dispatch<React.SetStateAction<SearchParamsType>>
) => {
    setSearchParams(params => ({...params, location}))
}

export const setAccessibility = (
    accessibility: string,
    setSearchParams: React.Dispatch<React.SetStateAction<SearchParamsType>>
) => {
    setSearchParams(params => ({...params, accessibility}))
}

export const setByCity = (
    byCity: boolean,
    setSearchParams: React.Dispatch<React.SetStateAction<SearchParamsType>>
) => {
    setSearchParams(prev => ({ ...prev, byCity }));
};
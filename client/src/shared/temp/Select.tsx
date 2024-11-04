import {FC, useEffect, useState} from "react";
import {SearchParamsType} from "@/shared/types";
import {searchTypes} from "@/shared/temp/searchTypes.ts";
import * as React from "react";
import {useDebounce} from "@/shared/hooks";

type SelectProps = {
    searchParams: SearchParamsType
    setSearchParams: (params: SearchParamsType) => void
}

export const Select: FC<SelectProps> = ({searchParams, setSearchParams}) => {

    const [value, setValue] = useState<string>("")
    const clickHandler = (e: React.ChangeEvent<HTMLSelectElement>) => setValue(e.target.value)
    const debouncedValue = useDebounce<string>(value)

    useEffect(() => {
        setSearchParams({
            ...searchParams,
            type: debouncedValue
        })
    }, [debouncedValue]);

    return (
        <select
            id={"search-type"}
            value={value}
            onChange={clickHandler}
        >
            {searchTypes.map(option => (
                <option key={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};
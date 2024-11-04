import {FC, useEffect, useState} from 'react';
import {useDebounce} from "@/shared/hooks";
import * as React from "react";
import {SearchParamsType} from "@/shared/types/SearchParamsType.ts";

type InputProps = {
    searchParams: SearchParamsType
    setSearchParams: (params: SearchParamsType) => void
}

export const Input: FC<InputProps> = ({searchParams, setSearchParams}) => {

    const [value, setValue] = useState<string>("")
    const clickHandler = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)
    const debouncedValue = useDebounce<string>(value)

    useEffect(() => {
        setSearchParams({
            ...searchParams,
            location: debouncedValue
        })
    }, [debouncedValue]);

    return (
        <input
            type={"text"}
            placeholder={"Где искать"}
            value={value}
            onChange={clickHandler}
        />
    );
};
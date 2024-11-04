import {FC, useEffect, useState} from "react";
import * as React from "react";
import {useDebounce} from "@/shared/hooks";
import {SearchParamsType} from "@/shared/types";

type CheckboxProps = {
    searchParams: SearchParamsType
    setSearchParams: (params: SearchParamsType) => void
}

export const Checkbox: FC<CheckboxProps> = ({searchParams, setSearchParams}) => {

    const [value, setValue] = useState<boolean>(false)
    const clickHandler = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.checked)
    const debouncedValue = useDebounce<boolean>(value)

    useEffect(() => {
        setSearchParams({
            ...searchParams,
            byCity: debouncedValue
        })
    }, [debouncedValue]);

    return (
        <label>
            <input
                type="checkbox"
                checked={value}
                onChange={clickHandler}
            />
            Поиск в городе
        </label>
    );
};
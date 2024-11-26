import {FC, useState} from "react";
import {Heading} from "@/widgets/tourList/ui/Heading.tsx";
import {Description} from "@/widgets/tourList/ui/Description.tsx";
import {SelectParams, SelectType} from "@/shared/ui";
import {SortValues} from "@/shared/types/features";
import {sortTypesArray} from "@/widgets/tourList/utils";

type HeaderProps = {
    city: string
    count: number
}

export const Header: FC<HeaderProps> = ({city, count}) => {

    const [value, setValue] = useState<SortValues>(SortValues.FOR_RATING)

    console.log(value)

    return (
        <header className={"flex flex-row justify-between"}>
            <div className={"flex flex-col gap-1"}>
                <Heading>{city}</Heading>
                <Description>{count} варианта от 200 рублей/чел.</Description>
            </div>
            <SelectParams
                defaultValue={SortValues.FOR_POPULAR}
                onChangeValue={setValue}
                options={sortTypesArray}
                placeholder={"Сортировка по"}
                selectType={SelectType.SORT}
            />
        </header>
    );
};
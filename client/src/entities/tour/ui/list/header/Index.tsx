import {FC} from "react";
import style from "./style.module.css";
import {Select} from "@/features";
import {Drawer} from "./drawer/index.ts";
import {SortValues} from "@/shared/types/features";

type HeaderProps = {
    city: string | undefined
    count: number
    sortType: SortValues
    setSortType: (sortType: SortValues) => void
}

export const Index: FC<HeaderProps> = (
    {city, count, sortType, setSortType}
) => {

    return (
        <header className={style.container}>
            <div className={style.content}>
                <h1 className={style.title}>{city}</h1>
                <span className={style.desc}>{count} найденных экскурсий</span>
            </div>
            <div className={style.options}>
                <Drawer/>
                <Select sortValue={sortType} setSortValue={setSortType}/>
            </div>
        </header>
    );
};
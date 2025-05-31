import {FC} from "react";
import style from "./style.module.css";
import {Drawer} from "./drawer/index.ts";
import {useTours} from "@/entities";
import {Select} from "./select";
import {searchTourStore as store} from "@/features";
import {formatTourCount} from "@/shared/lib";
import {ReqsButton} from "@/shared/ui";

export const Index: FC = () => {

    const {length} = useTours()
    const city = store.searchParams.location.city

    return (
        <header className={style.container}>
            <div className={style.content}>
                <h1 className={style.title}>{city}</h1>
                <span className={style.desc}>{formatTourCount(length)}</span>
            </div>
            <div className={style.options}>
                <Drawer/>
                <div className={"flex flex-row gap-2"}>
                    <Select/>
                    <ReqsButton/>
                </div>
            </div>
        </header>
    );
};
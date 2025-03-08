import {FC} from "react";
import style from "./style.module.css"
import {IContributor, ITour} from "@/shared/types";
import {Header} from "./header";
import {Description} from "./description";
import {Tours} from "./tours";

type LayoutProps = {
    contributor: IContributor
}

export const Index: FC<LayoutProps> = ({contributor}) => {
    return (
        <div className={style.container}>
            <Header
                name={contributor.name}
                avatar={contributor.avatar}
                contacts={contributor.contacts}
                rating={contributor.rating}
                ratingCount={contributor.ratingCount}
            />
            <Description
                desc={contributor.description}
            />
            <Tours
                tours={contributor.tours as ITour[]}
            />
        </div>
    );
};
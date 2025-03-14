import {FC} from "react";
import {ITour, RouteNames} from "@/shared/types";
import style from "./style.module.css"
import {BookingButton} from "@/shared/ui";
import {Item} from "./item";
import {Rating} from "./rating";
import {Price} from "./price";
import {ContributorButton, useContributor} from "@/entities";

type SidebarProps = {
    tour: ITour
}

export const Index: FC<SidebarProps> = ({tour}) => {

    const {data: contributor} = useContributor(tour.contributorId)

    return (
        <div className={style.container}>
            <ContributorButton
                contributorId={contributor.id}
                name={contributor.name}
                avatar={contributor.avatar}
            />
            <div className={style.subContainer}>
                <Item option={"Формат:"} value={tour.format}/>
                <Item option={"Длительность:"} value={tour.duration}/>
                <Item option={"Размер группы:"} value={`${tour.groupCapacity} человек`}/>
                <Item option={"Формат проведения:"} value={tour.formatBehavior}/>
                <Rating option={"Рейтинг:"} rating={tour.rating} ratingCount={tour.ratingCount}/>
                <hr className={style.separator}/>
                <Price price={tour.priceForPerson}/>
                <BookingButton link={`/${RouteNames.MAIN}`}/>
            </div>
        </div>
    );
};
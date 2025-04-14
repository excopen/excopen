import {FC} from "react";
import {ITour, RouteNames} from "@/shared/types";
import style from "./style.module.css"
import {BookingButton, LinearPrice} from "@/shared/ui";
import {Item} from "./item";
import {Rating} from "./rating";
import {ContributorButton, useContributor} from "@/entities";
import {formatHours, formatPeople} from "@/shared/utills";

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
                <Item option={"Длительность:"} value={formatHours(tour.duration)}/>
                <Item option={"Размер группы:"} value={formatPeople(tour.groupCapacity)}/>
                <Item option={"Формат проведения:"} value={tour.formatBehavior}/>
                <Rating option={"Рейтинг:"} rating={tour.rating} ratingCount={tour.ratingCount}/>
                <hr className={style.separator}/>
                <LinearPrice price={tour.priceForPerson}/>
                <BookingButton
                    size={"lg"}
                    link={`/${RouteNames.BOOKING}/${tour.id}`}
                    text={"Забронировать место(а)"}
                />
            </div>
        </div>
    );
};
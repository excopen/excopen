import {FC} from "react";
import {ITour, RouteNames} from "@/shared/types";
import style from "./style.module.css"
import {BookingButton} from "@/shared/ui";
import {Item} from "./item";
import {Rating} from "./rating";
import {Price} from "./price";
import {ContributorObject} from "@/shared/assets/tempData/ContributorObject.ts";
import {ContributorButton} from "@/entities";

type SidebarProps = {
    tour: ITour
}

export const Index: FC<SidebarProps> = ({tour}) => {

    // TODO вызов хука для получения контрибьютера

    return (
        <div className={style.container}>
            <ContributorButton
                name={ContributorObject.name}
                avatar={ContributorObject.avatar}
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
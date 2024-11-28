import {ContributorButton} from "@/widgets/tourSidebar/ui/contributorButton";
import {Item} from "@/widgets/tourSidebar/ui/item";
import {Rating} from "@/widgets/tourSidebar/ui/rating";
import {Price} from "@/widgets/tourSidebar/ui/price";
import {FC} from "react";
import {ITour} from "@/shared/types";
import style from "./style.module.css"
import {BookingButton} from "@/shared/ui";

type TourSidebarProps = {
    tour: ITour
}

export const Index: FC<TourSidebarProps> = ({tour}) => {
    return (
        <div className={style.container}>
            <ContributorButton
                name={tour.contributor?.name}
                link={"/"}
            />
            <div className={style.subContainer}>
                <Item option={"Формат:"} value={tour.format}/>
                <Item option={"Длительность:"} value={tour.duration}/>
                <Item option={"Размер группы:"} value={`${tour.groupCapacity} человек`}/>
                <Item option={"Формат проведения:"} value={tour.formatBehavior}/>
                <Rating option={"Рейтинг:"} rating={tour.rating} ratingCount={tour.ratingCount}/>
                <hr className={style.separator}/>
                <Price price={tour.priceForPerson}/>
                <BookingButton link={"/"}/>
            </div>
        </div>
    );
};
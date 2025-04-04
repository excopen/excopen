import {FC} from "react";
import {ITour, RouteNames} from "@/shared/types";
import {BookingButton, GroupPrice, Rating, TourParams} from "@/shared/ui";
import style from "./style.module.css"
import {useWindowSize} from "usehooks-ts";
import {ToFavourite} from "@/features";

type HeaderProps = {
    tour: ITour
}

export const Index: FC<HeaderProps> = ({tour}) => {

    const {width} = useWindowSize()

    return (
        <div className={style.container}>
            <div className={style.startCol}>
                <h2 className={style.title}>{tour.title}</h2>
                <div className={"flex flex-row md:flex-col gap-2 max-md:justify-between"}>
                    <TourParams
                        duration={tour.duration}
                        length={tour.routeLength}
                        formatBehavior={tour.formatBehavior}
                    />
                    <Rating
                        rating={tour.rating}
                        ratingCount={tour.ratingCount}
                    />
                </div>
            </div>
            <div className={style.endCol}>
                <GroupPrice price={tour.price}/>
                <div className={style.buttons}>
                    <ToFavourite tour={tour}/>
                    <BookingButton
                        size={width < 768 ? "lg" : "md"}
                        link={`/${RouteNames.WIP}`}
                        text={"Выбрать"}
                    />
                </div>
            </div>
        </div>
    );
};
import { FC } from "react";
import {ITour, PriceContainerVariant} from "@/shared/types";
import {CardButton, FavouriteButton, GroupPrice, ImagesCarousel, Rating, TourParams} from "@/shared/ui";
import style from "./style.module.css"

type TourCardProps = {
    tour: ITour
};

export const Index: FC<TourCardProps> = ({tour}) => {
    return (
        <div className={style.container}>

            <ImagesCarousel images={tour.images}/>

            <div className={style.content}>

                <div className={style.header}>
                    <Rating rating={tour.rating} ratingCount={tour.ratingCount}/>
                    <FavouriteButton/>
                </div>

                <div className={style.desc}>
                    <div className={style.descContent}>
                        <p className={style.title}>{tour.title}</p>
                        <p className={style.text}>{tour.shortDescription}</p>
                    </div>
                    <GroupPrice price={tour.price}/>
                </div>

                <div className={style.details}>
                    <TourParams duration={tour.duration} length={tour.routeLength}/>
                    <GroupPrice price={tour.price} variant={PriceContainerVariant.MOBILE} />
                    <CardButton/>
                </div>

            </div>

        </div>
    );
};
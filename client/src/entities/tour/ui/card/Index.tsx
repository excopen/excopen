import { FC } from "react";
import {ITour, RouteNames} from "@/shared/types";
import {
    Button,
    CarouselVariant,
    GroupPrice,
    ImagesCarousel,
    Rating,
    TourParams
} from "@/shared/ui";
import style from "./style.module.css"
import {useNavigate} from "react-router-dom";
import {ToFavourite, useViewed} from "@/entities";
import {useWindowSize} from "usehooks-ts";

type TourCardProps = {
    tour: ITour
};

export const Index: FC<TourCardProps> = ({tour}) => {

    const {width} = useWindowSize()
    const navigate = useNavigate()
    const addViewed = useViewed()

    const clickHandler = () => {
        navigate(`/${RouteNames.TOUR}/${tour.id}/${encodeURIComponent(tour.title)}`)
        addViewed(tour)
    }

    return (
        <div className={style.container}>

            <ImagesCarousel variant={CarouselVariant.SMALL} images={tour.images}/>

            <div className={style.content}>

                <div className={style.header}>
                    <Rating rating={tour.rating} ratingCount={tour.ratingCount}/>
                    <ToFavourite tour={tour}/>
                </div>

                <div className={style.desc}>
                    <div className={style.descContent}>
                        <p className={style.title}>{tour.title}</p>
                        <p className={style.text}>{tour.shortDescription}</p>
                    </div>
                    {width >= 768 && <GroupPrice price={tour.price}/>}
                </div>

                <div className={style.details}>
                    <TourParams
                        duration={tour.duration}
                        length={tour.routeLength}
                        formatBehavior={tour.formatBehavior}
                    />
                    {width < 768 && <GroupPrice price={tour.price}/>}
                    <Button onClick={clickHandler}>Выбрать</Button>
                </div>

            </div>

        </div>
    );
};
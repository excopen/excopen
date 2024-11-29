import { FC } from "react";
import {ITour, PriceContainerVariant, RouteNames} from "@/shared/types";
import {
    Button,
    CarouselVariant,
    FavouriteButton,
    GroupPrice,
    ImagesCarousel,
    Rating,
    TourParams
} from "@/shared/ui";
import style from "./style.module.css"
import {useNavigate} from "react-router-dom";

type TourCardProps = {
    tour: ITour
};

export const Index: FC<TourCardProps> = ({tour}) => {

    const navigate = useNavigate()

    const clickHandler = () => {
        navigate(`/${RouteNames.TOUR}/${encodeURIComponent(tour.title)}`)
    }

    return (
        <div className={style.container}>

            <ImagesCarousel variant={CarouselVariant.SMALL} images={tour.images}/>

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
                    <Button onClick={clickHandler}>Выбрать</Button>
                </div>

            </div>

        </div>
    );
};
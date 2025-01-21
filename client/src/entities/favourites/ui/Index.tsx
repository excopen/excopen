import {FC, useEffect, useState} from "react";
import { Heart } from "lucide-react";
import favourite from "@/shared/assets/icons/favourite.svg";
import style from "./style.module.css";
import { ITour } from "@/shared/types";
import { useTourTrackingContext } from "@/features";

type ToFavProps = {
    tour: ITour;
};

export const Index: FC<ToFavProps> = ({ tour }) => {

    const { favourites, addToFav, deleteFromFav } = useTourTrackingContext()
    const [isActive, setIsActive] = useState<boolean>(false)

    useEffect(() => {
        setIsActive(favourites.some(fav => fav.id === tour.id))
    }, [favourites, tour.id]);

    const clickHandler = () => {
        if (!isActive) addToFav(tour)
        else deleteFromFav(tour)
        setIsActive(!isActive)
    }

    return (
        <button onClick={clickHandler}>
            {isActive ? (
                <img alt="favourite" src={favourite} />
            ) : (
                <Heart className={style.heart} />
            )}
        </button>
    );
};
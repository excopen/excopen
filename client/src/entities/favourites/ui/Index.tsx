import {FC, useEffect, useState} from "react";
import { Heart } from "lucide-react";
import favourite from "@/shared/assets/icons/favourite.svg";
import style from "./style.module.css";
import { ITour } from "@/shared/types";
import { useTourTrackingContext } from "@/features";
import {useAddToFav, useDeleteFromFav, useFav} from "@/entities";
import {useAuthContext} from "@/app/context";

type ToFavProps = {
    tour: ITour;
};

export const Index: FC<ToFavProps> = ({ tour }) => {

    const { context, addToFav, deleteFromFav } = useTourTrackingContext()
    
    const {userId, isAuth} = useAuthContext()
    const {data: favourites} = useFav(userId)
    const {mutate: addToFavourites} = useAddToFav()
    const {mutate: deleteFromFavourites} = useDeleteFromFav()
    
    const [isActive, setIsActive] = useState<boolean>(false)

    useEffect(() => {
        if (!isAuth) setIsActive(context.localFav.some(fav => fav.id === tour.id))
        else setIsActive(favourites.some(fav => fav.id === tour.id))
    }, [context.localFav, favourites, isAuth, tour.id]);

    const clickHandler = () => {
        if (!isActive) {
            if (!isAuth) addToFav(tour)
            else addToFavourites(tour.id)
        }
        else {
            if (!isAuth) deleteFromFav(tour)
            else deleteFromFavourites(tour.id)
        }
        setIsActive(!isActive)
    }

    return (
        <button onClick={clickHandler}>
            {isActive ? (
                <img data-testid={"fav-icon"} alt={"favourite"} src={favourite} />
            ) : (
                <Heart data-testid={"heart-icon"} className={style.heart} />
            )}
        </button>
    );
};
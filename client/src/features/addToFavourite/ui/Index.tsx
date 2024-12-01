import {FC, useState} from "react";
import {Heart} from "lucide-react";
import favourite from "@/shared/assets/icons/favourite.svg"
import style from "./style.module.css"
import {useToFavContext} from "@/features";

type ToFavProps = {
    tourId: number
}

export const Index: FC<ToFavProps> = ({tourId}) => {

    const {favourites, addToFavourite, removeFromFavourite} = useToFavContext()

    const [isActive, setIsActive] = useState<boolean>(false)

    const clickHandler = () => {
        if (isActive && favourites.length !== 0) removeFromFavourite(tourId)
        if (!isActive) addToFavourite(tourId)
        setIsActive(!isActive)
    };

    console.log(favourites)

    return (
        <button onClick={clickHandler}>
            {
                isActive ?
                    <img alt={"favourite"} src={favourite}/> :
                    <Heart className={style.heart}/>
            }
        </button>
    );
};
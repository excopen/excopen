import {Button, Rating, ReviewInput} from "@/shared/ui";
import {FC, useEffect, useState} from "react";
import {Stars} from "./components";
import style from "./style.module.css"
import {ITour, RouteNames} from "@/shared/types";
import {useNavigate} from "react-router-dom";
import {SquareArrowOutUpRight} from "lucide-react";

type FormProps = {
    tour: ITour
}

export const Index: FC<FormProps> = ({tour}) => {

    const [positive, setPositive] = useState<string>("")
    const [negative, setNegative] = useState<string>("")
    const [rating, setRating] = useState<number>(0)

    const [completed, setCompleted] = useState<boolean>(false)

    useEffect(() => {
        if (negative.length !== 0 && positive.length !== 0 && rating !== 0) setCompleted(true)
        else setCompleted(false)
    }, [negative, positive, rating]);

    const saveReview = () => {
        // TODO сохрамения данных
        console.log(positive + " | " + negative + " | " + rating)
    }

    const navigate = useNavigate()
    const clickHandler = () => navigate(`/${RouteNames.TOUR}/${encodeURIComponent(tour.title)}`)

    return (
        <div className={style.container}>
            <div className={style.header}>
                <div className={style.tourInfo}>
                    <p className={style.title}>{tour.title}</p>
                    <Rating rating={tour.rating} ratingCount={tour.ratingCount}/>
                </div>
                <button onClick={clickHandler}>
                    <SquareArrowOutUpRight
                        className={"text-grayscale-350 hover:opacity-50 transition"}
                        width={20}
                        height={20}
                    />
                </button>
            </div>
            <Stars rating={rating} setRating={setRating}/>
            <div className={style.reviews}>
                <ReviewInput
                    className={"bg-grayscale-200"}
                    onChangeHandler={setPositive}
                    placeholder={"Что понравилось"}
                />
                <ReviewInput
                    className={"bg-grayscale-200"}
                    onChangeHandler={setNegative}
                    placeholder={"Что не понравилось"}
                />
            </div>
            <div className={style.button}>
                <Button disabled={!completed} onClick={saveReview}>
                    Добавить
                </Button>
            </div>
        </div>
    );
};
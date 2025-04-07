import {Button, Rating, ReviewInput} from "@/shared/ui";
import {FC, useCallback, useEffect, useState} from "react";
import {Stars} from "./components";
import style from "./style.module.css"
import {ITour, RouteNames, TourAccessibility} from "@/shared/types";
import {useNavigate} from "react-router-dom";
import {SquareArrowOutUpRight} from "lucide-react";
import {useCreateReview} from "@/entities";
import {useUser} from "@/entities/user/model";
import {useAuthContext} from "@/features";

type FormProps = {
    tour: ITour
}

export const Index: FC<FormProps> = ({tour}) => {

    const {userId} = useAuthContext()
    const {data: user} = useUser(userId)

    const {mutate: createReview} = useCreateReview()

    const [positive, setPositive] = useState<string>("")
    const [negative, setNegative] = useState<string>("")
    const [rating, setRating] = useState<number>(0)

    const [completed, setCompleted] = useState<boolean>(false)

    useEffect(() => {
        if (Boolean(negative) && Boolean(positive) && rating !== 0) setCompleted(true)
        else setCompleted(false)
    }, [negative, positive, rating]);

    const saveReview = () => createReview({
        id: Date.now(),
        name: user.name,
        rating: rating,
        negativeText: negative,
        positiveText: positive,
        withChildren: tour.accessibility === TourAccessibility.WITH_CHILDREN,
        personCount: user?.orders?.find(i => i.groupCapacity === tour.groupCapacity)?.groupCapacity || 0
    })

    const navigate = useNavigate()
    const clickHandler = useCallback(() => {
        navigate(`/${RouteNames.TOUR}/${tour.id}/${encodeURIComponent(tour.title)}`)
    }, [navigate, tour.id, tour.title])

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
            <div>
                <Button className={"mt-4"} disabled={!completed} onClick={saveReview}>
                    Добавить
                </Button>
            </div>
        </div>
    );
};
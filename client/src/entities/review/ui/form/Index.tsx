import {Button, Rating, ReviewInput} from "@/shared/ui";
import {FC, useCallback, useEffect, useState} from "react";
import {Stars} from "./components";
import style from "./style.module.css"
import {IReview, ITour, RouteNames, TourAccessibility} from "@/shared/types";
import {useNavigate} from "react-router-dom";
import {SquareArrowOutUpRight} from "lucide-react";
import {useCreateReview, useReviewsByUserId, useUpdateReview} from "@/entities";
import {useUser} from "@/entities/user/model";
import {useAuthContext} from "@/features";

type FormProps = {
    type: "create" | "update",
    tour: ITour,
    key?: any
}

export const Index: FC<FormProps> = ({tour, type, key}) => {

    const {user: userAuth} = useAuthContext()
    const {data: user} = useUser(userAuth?.id as number)

    const {mutate: createReview} = useCreateReview()

    const {data: oldReviews} = useReviewsByUserId(user.id)
    const oldReview = oldReviews.find(r => r.tourId === tour.id) as IReview

    const {mutate: updateReview} = useUpdateReview()

    const initPositive = type === "create" ? "" : oldReview.positiveText
    const initNegative = type === "create" ? "" : oldReview.negativeText
    const initRating = type === "create" ? 0 : oldReview.rating

    const [positive, setPositive] = useState<string>(initPositive)
    const [negative, setNegative] = useState<string>(initNegative)
    const [rating, setRating] = useState<number>(initRating)

    const [completed, setCompleted] = useState<boolean>(false)

    useEffect(() => {
        if (Boolean(negative) && Boolean(positive) && rating !== 0) setCompleted(true)
        else setCompleted(false)
    }, [negative, positive, rating]);

    const saveReview = () => {
        if (type === "create") {
            createReview({
                id: Date.now(),
                userId: user.id,
                tourId: tour.id,
                name: user.name,
                rating: rating,
                negativeText: negative,
                positiveText: positive,
                withChildren: tour.accessibility === TourAccessibility.WITH_CHILDREN,
                personCount: user?.orders?.find(i => i.groupCapacity === tour.groupCapacity)?.groupCapacity || 0
            })
        } else {
            updateReview({
                id: Date.now(),
                userId: user.id,
                tourId: tour.id,
                name: user.name,
                rating: rating,
                negativeText: negative,
                positiveText: positive,
                withChildren: tour.accessibility === TourAccessibility.WITH_CHILDREN,
                personCount: user?.orders?.find(i => i.groupCapacity === tour.groupCapacity)?.groupCapacity || 0
            })
        }
    }

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
                    {type === "create" ? "Добавить" : "Изменить"}
                </Button>
            </div>
        </div>
    );
};
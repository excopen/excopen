import {FC} from "react";
import {ITour} from "@/shared/types";
import {Details} from "./details";
import {Contributor} from "./contributor";
import style from "./style.module.css"
import {Reviews} from "@/entities/review";
import {Contacts} from "@/shared/ui";
import {useContributor} from "@/entities";

type DescriptionProps = {
    tour: ITour
}

export const Index: FC<DescriptionProps> = ({tour}) => {

    const {data: contributor} = useContributor(tour.contributorId)

    return (
        <div className={style.container}>

            <div className={style.subContainer}>
                <p>{tour?.description?.mainInfo}</p>
            </div>

            <h2 className={style.heading}>
                Что Вас ождает:
            </h2>

            <div className={style.subContainer}>
                <p>{tour?.description?.whatToExpect}</p>
                <span className={style.bold}>
                    Что вам встретится по пути
                </span>
                <ul className={style.list}>
                    {tour?.description?.locations.map((location, i) => (
                        <li key={i}>{location}</li>
                    ))}
                </ul>
                <span className={style.bold}>
                    О чём будем беседовать
                </span>
                <ul className={style.list}>
                    {tour?.description?.topics.map((topic, i) => (
                        <li key={i}>{topic}</li>
                    ))}
                </ul>
            </div>

            <div className={style.subContainer}>
                <h3 className={style.heading}>
                    Организационные детали
                </h3>
                <p>{tour?.description?.orgDetails}</p>
            </div>

            <div className={style.subContainer}>
                <h3 className={style.heading}>
                    Место встречи
                </h3>
                <p>{tour?.description?.meetingPlace}</p>
            </div>

            <div className={style.contacts}>
                <h3 className={style.heading}>
                    Остались вопросы?
                </h3>
                <Contacts
                    link={contributor.contacts.link}
                    vk={contributor.contacts.vk as string}
                    telegram={contributor.contacts.telegram as string}
                />
            </div>

            <Details/>

            <Reviews
                tourId={tour.id}
                rating={tour.rating}
                ratingCount={tour.ratingCount}
            />

            <Contributor
                contributorId={contributor.id}
                name={contributor.name}
                description={contributor.description}
                rating={contributor.rating}
            />

        </div>
    );
};
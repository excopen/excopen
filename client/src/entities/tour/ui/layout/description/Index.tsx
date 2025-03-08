import {FC} from "react";
import {ITour} from "@/shared/types";
import {Details} from "./details";
import {Contributor} from "./contributor";
import style from "./style.module.css"
import {Reviews} from "@/entities/review";
import {ContributorObject} from "@/shared/assets/tempData/ContributorObject.ts";
import {Contacts} from "@/shared/ui";

type DescriptionProps = {
    tour: ITour
}

export const Index: FC<DescriptionProps> = ({tour}) => {
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
                    link={ContributorObject.contacts.link}
                    vk={ContributorObject.contacts.vk as string}
                    telegram={ContributorObject.contacts.telegram as string}
                />
            </div>

            <Details/>

            <Reviews
                rating={tour.rating}
                ratingCount={tour.ratingCount}
                reviews={tour.reviews}
            />

            <Contributor
                name={ContributorObject.name}
                description={ContributorObject.description}
                rating={ContributorObject.rating}
            />

        </div>
    );
};
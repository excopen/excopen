import {FC, useEffect, useState} from "react";
import {searchByCity, searchByRegion, useTourTrackingContext} from "@/features";
import style from "@/widgets/viewedTours/ui/style.module.css";
import {TourCard} from "@/entities";
import {TourPagination} from "@/shared/ui";
import {ITour} from "@/shared/types";

type ToursProps = {
    city: string
    byCity: boolean
}

export const Index: FC<ToursProps> = ({city, byCity}) => {

    const {context} = useTourTrackingContext()
    const [tours, setTours] = useState<ITour[]>(context.viewed)
    const [visible, setVisible] = useState<number>(
        3
    )

    useEffect(() => {

        let filteredTours: ITour[] = context.viewed

        if (byCity) filteredTours = searchByRegion(filteredTours, byCity)
        if (city) filteredTours = searchByCity(filteredTours, city)

        setTours(filteredTours)

    }, [context.viewed, city, byCity]);

    return (
        <div className={style.viewed}>
            <span>Вы смотрели ранее</span>
            {tours.length === 0
                ?
                <div className={style.warning}>
                    <span>Экскурсии не найдены :(</span>
                </div>
                :
                <>
                    {tours.slice(0, visible).map(tour => <TourCard key={tour.id} tour={tour}/>)}
                    <TourPagination
                        visiable={visible}
                        setVisible={setVisible}
                        maxLength={tours.length}
                    />
                </>

            }
        </div>
    );
};
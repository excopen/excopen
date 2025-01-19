import {FC, useState} from "react";
import style from "./style.module.css";
import {Header} from "./header";
import {searchByCity, useTourTrackingContext} from "@/features";
import {TourCard} from "@/entities";

export const Index: FC = () => {

    const {viewed} = useTourTrackingContext()
    const [location, setLocation] = useState<string>("")
    const tours = searchByCity(viewed, location)

    return (
        <div className={style.container}>
            <Header onChangeHandler={setLocation}/>
            {tours.map(tour => <TourCard key={tour.id} tour={tour}/>)}
        </div>
    );
};
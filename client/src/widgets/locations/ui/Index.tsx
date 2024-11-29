import {FC} from "react";
import {locationsArray} from "@/shared/assets/tempData/LocationsArray.ts";
import {LocationCard} from "@/widgets/locationCard";
import {Button} from "@/shared/ui";
import style from "./style.module.css"

export const Index: FC = () => {
    return (
        <section className={style.container}>
            <h2 className={style.heading}>
                Самые популярные направления
            </h2>
            <div className={style.list}>
                {locationsArray.map(location => (
                    <LocationCard
                        key={location.id}
                        country={location.country}
                        city={location.city}
                        tourCount={location.tourCount}
                        image={location.image}
                    />
                ))}
            </div>
            <Button variant={"outline"} size={"lg"}>
                перейти к списку городов
            </Button>
        </section>
    );
};
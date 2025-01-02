import {FC} from "react";
import {locationsArray} from "@/shared/assets/tempData/LocationsArray.ts";
import {LocationCard} from "@/widgets/locationCard";
import {Button} from "@/shared/ui";
import style from "./style.module.css"
import {Link, useLocation} from "react-router-dom";
import {RouteNames} from "@/shared/types";

export const Index: FC = () => {

    const location = useLocation();

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
            {location.pathname !== `/${RouteNames.LOCATIONS}` && (
                <Link to={`/${RouteNames.LOCATIONS}`}>
                    <Button variant={"outline"} size={"lg"}>
                        перейти к списку городов
                    </Button>
                </Link>
            )}
        </section>
    );
};
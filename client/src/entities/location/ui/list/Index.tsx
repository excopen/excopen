import {FC} from "react";
import {Button, LocationsSkeleton} from "@/shared/ui";
import style from "./style.module.css"
import {Link, useLocation} from "react-router-dom";
import {RouteNames} from "@/shared/types";
import {LocationCard, useLocations} from "@/entities";

export const Index: FC = () => {

    const location = useLocation()
    const {data, isLoading, isSuccess} = useLocations()

    return (
        <section className={style.container}>
            <h2 role={"heading"} className={style.heading}>
                Самые популярные направления
            </h2>
            {
                !data && isLoading
                    ?
                    <LocationsSkeleton/>
                    :
                    <div className={style.list}>
                        {data.slice(0, 4).map(location => (
                            <LocationCard
                                key={location.id}
                                country={location.country}
                                city={location.city}
                                tourCount={location.tourCount}
                                image={location.image as string}
                            />
                        ))}
                    </div>
            }
            {location.pathname !== `/${RouteNames.LOCATIONS}` && isSuccess && (
                <Link to={`/${RouteNames.LOCATIONS}`}>
                    <Button role={"button"} variant={"outline"} size={"lg"}>
                        перейти к списку городов
                    </Button>
                </Link>
            )}
        </section>
    );
};
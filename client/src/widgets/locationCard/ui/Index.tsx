import { FC } from "react";
import style from "./style.module.css"
import {Container} from "./container"
import {cn} from "@/app/lib/utils.ts";

type LocationCardProps = {
    country: string;
    city: string;
    tourCount: number;
    image: string;
};

export const Index: FC<LocationCardProps> = ({ country, city, tourCount, image }) => {
    return (
        <Container image={image}>
            <div className={cn(style.gradient, style.opacity)}/>
            <div className={style.content}>
                <span className={style.country}>
                    {country}
                </span>
                <span className={style.city}>
                    {city}
                </span>
                <span className={style.count}>
                    {tourCount}+ экскурсий
                </span>
            </div>
        </Container>
    );
};
import {FC, useEffect} from "react";
import style from "./style.module.css"
import {useSearchContext} from "@/features";

type IndexProps = {
    cities: string[]
}

export const Index: FC<IndexProps> = ({cities}) => {

    const {searchParams, setLocation} = useSearchContext()

    const clickHandler = (newCity: string) => {
        setLocation(newCity)
    }

    useEffect(() => {
        window.scroll(0,0)
    }, [searchParams.location]);

    return (
        <div className={style.container}>
            {cities.length === 0 && <span className={style.warning}>Город не найден</span>}
            {cities.map(city => (
                <span key={city} className={style.city} onClick={() => clickHandler(city)}>
                    {city}
                </span>
            ))}
        </div>
    );
};
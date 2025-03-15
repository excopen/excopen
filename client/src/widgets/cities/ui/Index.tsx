import {FC, useEffect, useState} from "react";
import style from "./style.module.css"
import {SearchInput} from "@/shared/ui";
import {ListLetter} from "./listLetter";
import {ListCities} from "./listCities";
import {searchCity} from "@/features";
import {useLocations} from "@/entities/location/model";

export const Index: FC = () => {

    const {data: locations, isLoading} = useLocations()

    const [location, setLocation] = useState<string>("")
    const [isActive, setIsActive] = useState<boolean>(false)
    const [cities, setCities] = useState<string[]>([])

    useEffect(() => {
        if (location.length === 0) setCities(searchCity("А", locations))
        else setCities(searchCity(location, locations))
    }, [location]);

    const focusHandler = () => {
        setIsActive(true)
        setCities([])
    }

    const blurHandler = () => {
        setIsActive(false)
        setCities(searchCity(location, locations))
    }

    if (isLoading) return <div>Данные загружаются...</div>

    return (
        <div className={style.container}>
            <h2 className={style.heading}>
                Список городов
            </h2>
            <SearchInput
                onFocus={focusHandler}
                onBlur={blurHandler}
                onChangeHandler={setLocation}
                placeholder={"Искать"}
            />
            <ListLetter
                location={location}
                setLocation={setLocation}
                isActive={isActive}
            />
            <ListCities
                cities={cities}
            />
        </div>
    );
};
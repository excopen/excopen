import {FC, useState} from "react";
import style from "./style.module.css";
import {Header} from "./header";
import {Accordion} from "./accordion"
import {Viewed} from "./viewed";

export const Index: FC = () => {

    const [city, setCity] = useState<string>("")
    const [byCity, setByCity] = useState<boolean>(false)
    
    return (
        <div className={style.container}>
            <Header
                setCity={setCity}
                setByCity={setByCity}
            />
            <Accordion/>
            <Viewed
                city={city}
                byCity={byCity}
            />
        </div>
    );
};
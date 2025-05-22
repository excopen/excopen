import React, {FC, Suspense, useState} from "react";
import style from "./style.module.css";
import {Header} from "./header/index.ts";
import {authStore as auth} from "@/features";
import {ToursAccordion} from "./ToursAccordion.tsx";
import {AppSkeleton} from "@/shared/ui";
import {observer} from "mobx-react-lite";

const LazyViewed = React.lazy(() =>
    import('@/widgets/dashboard/viewed').then(module => ({
        default: module.Viewed,
    }))
)

export const Index: FC = observer(() => {

    const isAuth = auth.isAuth

    const [city, setCity] = useState<string>("")
    const [byCity, setByCity] = useState<boolean>(false)

    return (
        <div className={style.container}>
            <Header setCity={setCity} setByCity={setByCity}/>
            {isAuth && <ToursAccordion/>}
            <Suspense fallback={<AppSkeleton/>}>
                <LazyViewed city={city} byCity={byCity}/>
            </Suspense>
        </div>
    );
})